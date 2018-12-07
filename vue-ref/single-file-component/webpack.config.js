const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{ test: /\.vue$/, use: 'vue-loader' },
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
		]
	},
	devServer: {
		open: true,
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new VueLoaderPlugin(),  // The VueLoaderPlugin works with our vue-loader to parse our .vue files.
		new webpack.HotModuleReplacementPlugin(),
	]
};