module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    // Использовать табы для отступов (1 таб = 1 уровень)
    indent: ['error', '2'],
    'react/jsx-indent': ['error', '2'],
    'react/jsx-indent-props': ['error', '2'],

    // Разрешить двойные кавычки (если хотите singlequotes, измените на "single")
    quotes: ['error', 'single', { avoidEscape: true }],

    // Разрешить табы (отключаем правило no-tabs)
    'no-tabs': 'off',

    // Правила для кнопок
    'react/button-has-type': [
      'error',
      {
        button: true, // Требовать type у <button>
        submit: true, // Требовать type="submit"
        reset: true, // Требовать type="reset"
      },
    ],

    // Остальные правила
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
    ],
    'max-len': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-param-reassign': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
