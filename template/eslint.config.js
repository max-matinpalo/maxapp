import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';


export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
			react.configs.flat.recommended,
			react.configs.flat['jsx-runtime'],
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		rules: {
			"no-unused-vars": "off",
			"react-refresh/only-export-components": "off",
			"react/jsx-no-undef": "off",

			// because eslint does not like our globals
			// to enable we should write eslint globals file 😃
			//"no-undef": "error",
			'react/prop-types': 'off',
			"no-undef": "off",
		},
		settings: {
			react: { version: "detect" }
		},
	},
]);
