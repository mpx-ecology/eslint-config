module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['eslint:recommended', 'plugin:mpx/mpx-essential'],
  rules: {
    camelcase: ['error', { 'allow': ['__mpx_mode__', '__mpx_env__'] }],
    'mpx/script-setup-uses-vars': 2
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'standard',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint']
    },
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
