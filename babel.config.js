module.exports = {
	presets: [
		['@babel/preset-env', { modules: false }],
		['@babel/preset-react', { development: true }],
	],
	plugins: [
		// Stage 2
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'@babel/plugin-proposal-function-sent',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-numeric-separator',
		'@babel/plugin-proposal-throw-expressions',
		'@babel/plugin-proposal-object-rest-spread',

		// Stage 3
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-json-strings',
	],
	env: {
		test: {
			plugins: [
				'@babel/plugin-transform-modules-commonjs',
			],
		},
		development: {
			plugins: [
				'react-hot-loader/babel',
			],
		},
	},
};
