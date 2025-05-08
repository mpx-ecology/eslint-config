import type { Linter } from 'eslint'
import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from './types'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { isPackageExists } from 'local-pkg'

import {
  mpx,
  vue,
  node,
  javascript,
  ignores,
  typescript
} from './configs'
import { getOverrides, resolveSubOptions } from './utils'
const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]
export function mpxConfig(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames>  {
  const {
    mpx: enableMpx = isPackageExists('@mpxjs/core'),
    typescript: enableTypeScript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
  } = options
  const configs: Awaitable<TypedFlatConfigItem[]>[] = [
    ignores(options.ignores),
    node(),
    javascript({
      overrides: getOverrides(options, 'javascript'),
    }),
  ]
  if (enableMpx) {
    // componentExts.push('mpx')
    configs.push(mpx({
      ...resolveSubOptions(options, 'mpx'),
      overrides: getOverrides(options, 'mpx'),
      typescript: !!enableTypeScript,
    }))
  }

  if (enableVue) {
    configs.push(vue({
      ...resolveSubOptions(options, 'vue'),
      overrides: getOverrides(options, 'vue'),
      typescript: !!enableTypeScript,
    }))
  }

  if (enableTypeScript) {
    configs.push(typescript({
      overrides: getOverrides(options, 'typescript')
    }))
  }

  let composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>()
  composer = composer
    .append(
      ...configs,
      ...userConfigs as any
    )
  return composer
}
