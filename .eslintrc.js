module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // Ya está desactivado
    '@typescript-eslint/explicit-function-return-type': 'off', // Ya está desactivado
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Ya está desactivado
    '@typescript-eslint/no-explicit-any': 'off', // Ya está desactivado
    '@typescript-eslint/no-empty-interface': 'off', // <== Desactiva advertencias sobre interfaces vacías
    'prettier/prettier': 'off', // <== Desactiva conflictos de Prettier
  },
};
