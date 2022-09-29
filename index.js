module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:mpx/mpx-essential'],
  rules: {
    camelcase: ['error', { 'allow': ['__mpx_mode__', '__mpx_env__'] }],
    'mpx/script-setup-uses-vars': 2,
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off'
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
        'eslint:recommended',
        'plugin:import/recommended'
      ],
      rules: {
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/named': 'error',
        'import/no-absolute-path': 'off'
      }
    }
  ]
}
