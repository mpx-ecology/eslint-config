module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@mpxjs'],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      plugins: ['@typescript-eslint']
    }
  ]
}
