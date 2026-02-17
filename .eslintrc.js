/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		"airbnb",
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		// "next/core-web-vitals",
		// "next/typescript"
	],
	plugins: [
		'perfectionist',
		"react-hooks"
	],
	parserOptions: {
		project: true,
	},
	ignorePatterns: [
		'!.*',
		'compiled',
		'build-storybook',
		'next-env.d.ts',
		'node_modules/',
		'dist/',
		'.next/',
		'.analyzer/',
		'build/',
		'.turbo/',
		'.eslintrc.js',
		'*.config.js',
		'tsconfig.json',
		'**/*.css'
	],
	globals: {
		React: true,
		JSX: true,
	},
	env: {
		node: true,
		browser: true,
	},
	overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }], 
	rules: {
		"@typescript-eslint/no-misused-promises": "off",
		"react/no-unknown-property": ['error', { ignore: ['css', 'sx'] }],
		'@typescript-eslint/prefer-nullish-coalescing': [
			'error',
			{
				allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
				ignoreConditionalTests: true,
				ignoreMixedLogicalExpressions: false,
				ignorePrimitives: {
					bigint: false,
					boolean: true,
					number: false,
					string: false,
				},
				ignoreTernaryTests: false,
			},
		],
		"@typescript-eslint/no-unsafe-call": "off",
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/no-unstable-nested-components': 'off',
		'jsx-a11y/control-has-associated-label': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-restricted-exports': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/consistent-indexed-object-style': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
		'import/no-default-export': 'off',
		'eslint-comments/require-description': 'off',
		'no-console': 0,
		'react/function-component-definition': [
			2,
			{
				'namedComponents': 'arrow-function'
			}
		],
		'react/jsx-no-useless-fragment': [
			2,
			{
				'allowExpressions': true
			}
		],
		'react/require-default-props': 0,
		'react/prop-types': 'error',
		'react/default-props-match-prop-types': [
			'error',
			{
				'allowRequiredDefaults': true
			}
		],
		'import/prefer-default-export': 'off',
		'jsx-a11y/href-no-hash': 'off',
		'no-underscore-dangle': 'off',
		'react/forbid-prop-types': 'off',
		'max-len': 'off',
		'global-require': 'off',
		'quote-props': 'off',
		'arrow-parens': 'off',
		'default-param-last': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				'extensions': [
					'.js',
					'.jsx',
					'.ts',
					'.tsx'
				]
			}
		],
		'indent': [
			2,
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'@typescript-eslint/indent': 0,
		'react/jsx-indent': [
			2,
			'tab'
		],
		'react/jsx-indent-props': [
			2,
			'tab'
		],
		'no-tabs': 0,
		'object-curly-newline': 0,
		'no-lonely-if': 0,
		'prefer-template': 0,
		'consistent-return': 0,
		'arrow-body-style': 0,
		'react/no-string-refs': 0,
		'prefer-destructuring': 1,
		'no-bitwise': 0,
		'react/no-array-index-key': 0,
		'no-plusplus': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'react/no-danger': 0,
		'react/state-in-constructor': 0,
		'function-paren-newline': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'react/destructuring-assignment': 0,
		'operator-linebreak': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-wrap-multilines': 0,
		'react/display-name': 0,
		'linebreak-style': 0,
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				'vars': 'all',
				'varsIgnorePattern': '^_',
				'args': 'after-used',
				'argsIgnorePattern': '^_',
				'destructuredArrayIgnorePattern': '^_'
			}
		],
		// perfectionist
		// https://eslint-plugin-perfectionist.azat.io/
		'perfectionist/sort-named-imports': [
			2,
			{
				'order': 'asc',
				'type': 'line-length'
			}
		],
		'perfectionist/sort-named-exports': [
			2,
			{
				'order': 'asc',
				'type': 'line-length'
			}
		],
		'perfectionist/sort-exports': [
			2,
			{
				'order': 'asc',
				'type': 'line-length'
			}
		],
		'perfectionist/sort-imports': [
			2,
			{
				'order': 'asc',
				'type': 'line-length',
				'newlinesBetween': 'always',
				'groups': [
					'custom-theme',
					'side-effect-style',
					[
						'builtin',
						'external'
					],
					'custom-next',
					'custom-mui',
					'custom-mantine',
					'custom-tabler',
					'custom-containers',
					'custom-components',
					'custom-hooks',
					'custom-utils',
					'custom-types',
					'internal',
					[
						'parent',
						'sibling',
						'index'
					],
					'object',
					'unknown'
				],
				'customGroups': {
					'value': {
						'custom-tabler': '@tabler/.+',
						'custom-mantine': '@mantine/.+',
						'custom-mui': '@mui/.+',
						'custom-next': 'next/.+',
						'custom-theme': 'src/theme/.+',
						'custom-containers': 'src/containers/.+',
						'custom-components': '@repo/ui/.+',
						'custom-hooks': 'src/hooks/.+',
						'custom-utils': 'src/utils/.+',
						'custom-types': 'src/types/.+'
					}
				},
				'internalPattern': [
					'src/.+',
					'#src/.+'
				]
			}
		]
	}
};
