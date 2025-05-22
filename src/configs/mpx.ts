
import type { OptionsMpx, OptionsHasTypeScript, TypedFlatConfigItem } from '../types'

import { interopDefault } from '../utils'
export async function mpx(
  options: OptionsMpx & OptionsHasTypeScript = {}
): Promise<TypedFlatConfigItem[]>  {
  const {
    overrides,
    type = 'compositionApi'
  } = options
  const [
    pluginMpx,
    parserMpx,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-mpx')),
    interopDefault(import('mpx-eslint-parser'))
  ])
  const { configs } = pluginMpx
  const essential = configs['flat/mpx-essential']
  const compositionApiEssential = configs['flat/composition-api-essential']
  const typeConfig:{
    options: any;
    compositionApi: any;
  } = {
    options: essential,
    compositionApi: compositionApiEssential
  }
  const config = typeConfig[type]
  return [
    ...config,
   type === 'compositionApi' ? {
      languageOptions: {
        globals: {
          defineExpose: 'readonly',
          defineProps: 'readonly',
        },
      },
      plugins: {
        mpx: pluginMpx,
      },
      name: 'mpx/setup'
    } : null,
    {
      name: 'mpx/rules',
      languageOptions: {
        parser: parserMpx,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.mpx'],
          parser: options.typescript
            ? await interopDefault(import('@typescript-eslint/parser')) as any
            : null,
          sourceType: 'module',
        },
      },
      rules: {
        'no-undef': options.typescript ? 'off' : 'error',
        ...overrides,
      }
    }
  ]
}
