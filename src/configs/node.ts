import type { TypedFlatConfigItem } from '../types'

import { default as pluginNode } from 'eslint-plugin-n'

export async function node(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      name: 'mpx/node/rules',
      plugins: {
        node: pluginNode,
      },
      rules: {
        'node/handle-callback-err': ['error', '^(err|error)$'],
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/prefer-global/buffer': ['error', 'never'],
        'node/process-exit-as-throw': 'error',
      },
    },
  ]
}
