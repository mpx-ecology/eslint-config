module.exports = {
  extends: [
    './standard',
    'eslint:recommended',
    'plugin:mpx/mpx-essential'
  ],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  rules: {
    camelcase: ['error', { allow: ['__mpx_mode__', '__mpx_env__'] }]
    // 'mpx/script-setup-uses-vars': 2
  },
  overrides: [
    {
      files: ['**/*.mpx'],
      rules: {
        'no-undef': 0
      }
    },
    {
      files: ['**/*.js'],
      extends: [
        'eslint:recommended'
      ]
    }
  ]
}
