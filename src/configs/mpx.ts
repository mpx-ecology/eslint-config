
import type { OptionsMpx } from '../types'

import { interopDefault } from '../utils'
export async function mpx(options: OptionsMpx = {}) {
  const type = options.type || 'compositionApi'
  const { configs } = await interopDefault(import('eslint-plugin-mpx'))
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
  return config
}
