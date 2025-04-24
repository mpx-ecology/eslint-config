# @mpxjs/eslint-config
基于[eslint-plugin-mpx](https://github.com/mpx-ecology/eslint-plugin-mpx)插件,集成js和ts的推荐(recommended)配置
升级了eslintv9版本支持flatConfig。
## Usage

### Install

```bash
# js版本
pnpm add -D eslint @mpxjs/eslint-config
```

### Config `eslint.config.js`

```js

import { mpxConfig } from '@mpxjs/eslint-config'

export default mpxConfig(
  {
    mpx: true,
    vue: true,
    typescript: true
  }
)
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.ts,.mpx src",
    "lint:fix": "eslint --fix --ext .js,.ts,.mpx src"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
