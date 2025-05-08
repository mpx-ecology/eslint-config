import type { OptionsConfig, TypedFlatConfigItem } from '../src/types'

import fs from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { execa } from 'execa'
import { glob } from 'tinyglobby'

import { afterAll, beforeAll, it } from 'vitest'

beforeAll(async () => {
  await fs.rm('_fixtures', { recursive: true, force: true })
})
afterAll(async () => {
  await fs.rm('_fixtures', { recursive: true, force: true })
})

runWithConfig('js', {
  typescript: false,
  mpx: false,
  vue: false
})

runWithConfig('mpx-options', {
  mpx: {
    type: 'options'
  },
  typescript: false,
  vue: false
})

runWithConfig('all', {
  typescript: true,
  mpx: true,
  vue: true
})

function runWithConfig(name: string, configs: OptionsConfig, ...items: TypedFlatConfigItem[]) {
  it.concurrent(name, async ({ expect }) => {
    const from = resolve('fixtures/input')
    const output = resolve('fixtures/output', name)
    const target = resolve('_fixtures', name)

    await fs.cp(from, target, {
      recursive: true,
      filter: (src) => {
        return !src.includes('node_modules')
      },
    })
    await fs.writeFile(join(target, 'eslint.config.js'), `
      // @eslint-disable
      import { mpxConfig } from '@mpxjs/eslint-config'

      export default mpxConfig(
        ${JSON.stringify(configs)},
        ...${JSON.stringify(items) ?? []},
      )
  `)

    await execa('npx', ['eslint', '.', '--fix'], {
      cwd: target,
      stdio: 'pipe',
    })
    const files = await glob('**/*', {
      ignore: [
        'node_modules',
        'eslint.config.js',
      ],
      cwd: target,
    })

    await Promise.all(files.map(async (file) => {
      const content = await fs.readFile(join(target, file), 'utf-8')
      const source = await fs.readFile(join(from, file), 'utf-8')
      const outputPath = join(output, file)
      if (content === source) {
        await fs.rm(outputPath, { force: true })
        return
      }
      await expect.soft(content).toMatchFileSnapshot(join(output, file))
    }))
  }, 30_000)
}
