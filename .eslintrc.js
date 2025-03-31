module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		// Использовать табы для отступов (1 таб = 1 уровень)
		indent: ["error", "tab"],
		"react/jsx-indent": ["error", "tab"], // Отступы в JSX
		"react/jsx-indent-props": ["error", "tab"], // Отступы пропсов в JSX

		// Разрешить двойные кавычки (если хотите singlequotes, измените на "single")
		quotes: ["error", "double", { avoidEscape: true }],

		// Разрешить табы (отключаем правило no-tabs)
		"no-tabs": "off",

		// Правила для кнопок
		"react/button-has-type": [
			"error",
			{
				button: true, // Требовать type у <button>
				submit: true, // Требовать type="submit"
				reset: true, // Требовать type="reset"
			},
		],

		// Остальные правила
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "warn",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "warn",
		"react/function-component-definition": "off",
		"no-shadow": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"no-underscore-dangle": "off",
	},
	globals: {
		__IS_DEV__: true,
	},
};
