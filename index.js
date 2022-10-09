const importRules = {
  'import/order': 'error',
  'import/first': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default-member': 'off',
  'import/no-named-as-default': 'off',
  'import/namespace': 'off',
  'import/no-unresolved': 'off',
  'import/no-absolute-path': 'off'
}

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:mpx/mpx-essential'],
  rules: {
    camelcase: ['error', { 'allow': ['__mpx_mode__', '__mpx_env__'] }],
    // 'mpx/script-setup-uses-vars': 2,
    ...importRules
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
        ...importRules
      }
    }
  ]
}
