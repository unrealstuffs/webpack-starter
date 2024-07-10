import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            // prettier: prettierPlugin,
        },
    },
    {
        ignores: ['build', 'config', 'node_modules', '*.config.js', '*.config.ts'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
            },
            parserOptions: {
                project: ['tsconfig.json'],
            },
        },
    },
    {
        files: ['**/*.{ts,js}'],
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            'prefer-const': 'error',
            'max-lines': ['warn', { max: 124 }],
        },
    },
)
