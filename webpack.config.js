const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const favicon = path.resolve('images', 'favicon.png');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './html/index.html',
	filename: 'index.html',
	inject: 'body',
	favicon: path.resolve('images', 'favicon.png')
});

module.exports = {
	entry: {
		app: './index.js',
		styles: path.resolve('styles', 'index.less')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			},
			{
			  	test: /\.less$/,
				include: [path.resolve('styles')],
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /(\.jpg|\.png|\.svg)$/,
				loader: 'file-loader?name=images/[name].[ext]'
			},
			{
				test: /(\.eot|\.ttf|\.woff|\.woff2)$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			},
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}