var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		register: './js/register.js',
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: './build/'
	},
	module: {
		loaders: [{
			test: /\.less$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader', {
				publicPath: './'
			})
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
				publicPath: './'
			})
		}, {
			test: /\.(ttf|eot|svg|woff(2)?)(\?v=[\d.]+)?(\?[a-z0-9#-]+)?$/,
			loader: 'file-loader'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new webpack.DefinePlugin({
			'require.specified': 'require.resolve'
		}),
		new ExtractTextPlugin('[name].css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
