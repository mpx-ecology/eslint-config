import type { Linter } from 'eslint'
import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from './types'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { isPackageExists } from 'local-pkg'

export function mpxConfig(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames>  {
  let composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>()
  composer = composer
  .append()
  return composer
}
