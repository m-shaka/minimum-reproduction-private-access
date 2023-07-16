/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import-access'],
    parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2020,
        sourceType: 'module',
      },    
    root: true,
    rules: {
        'import-access/jsdoc': ['error'],
    },
    ignorePatterns: ['.eslintrc.cjs']
}
