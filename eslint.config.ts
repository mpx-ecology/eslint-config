
import { mpxConfig } from './src'

export default mpxConfig(
  {
    mpx: true,
    vue: true,
    typescript: true
  },
  {
    ignores: [
      'fixtures',
      '_fixtures'
    ],
  }
)
