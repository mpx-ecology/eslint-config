const eslintConf = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['plugin:mpx/mpx-essential', 'eslint:recommended'],
  env: {
    node: true,
    jest: true
  },
  globals: {
    wx: 'readonly',
    my: 'readonly',
    getCurrentPages: 'readonly',
    getApp: 'readonly',
    App: 'readonly',
    __mpx_mode__: 'readonly',
    __mpx_env__: 'readonly',
    __env__: 'readonly',
    __VERSION__: 'readonly',
    requirePlugin: 'readonly'
  },
  rules: {
    // camelcase: ['error', { 'allow': ['__mpx_mode__', '__mpx_env__'] }],
    camelcase: 0,
    'mpx/no-reserved-keys': 0,
    'no-undef': 0
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
      plugins: ['@typescript-eslint'],
      rules: {
        camelcase: 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'prefer-promise-reject-errors': 0,
        'no-case-declarations': 0,
        'no-empty': 0
      }
    },
    {
      files: ['**/*.js'],
      extends: [
        'eslint:recommended'
      ],
      rules: {
        'no-empty': 0
      }
    }
  ]
}

module.exports = eslintConf
