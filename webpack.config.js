const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './html/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
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
			      }
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}