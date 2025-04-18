import type { Linter } from 'eslint'
import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from './types'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { isPackageExists } from 'local-pkg'

import {
  mpx
} from './configs'

export function mpxConfig(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames>  {
  const {
    mpx: enableMpx = isPackageExists('@mpxjs/core')
  } = options
  const configs: Awaitable<TypedFlatConfigItem[]>[] = []
  if (enableMpx) {
    // componentExts.push('mpx')
    configs.push(mpx())
  }
  let composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>()
  composer = composer
    .append(
      ...configs,
      ...userConfigs as any
    )
  return composer
}
