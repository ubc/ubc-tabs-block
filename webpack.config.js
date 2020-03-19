const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	...defaultConfig,
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins() {
								// post css plugins, can be exported to postcss.config.js
								return [ require( 'autoprefixer' ) ];
							},
						},
					},
					{ loader: 'sass-loader' },
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
	],
};
