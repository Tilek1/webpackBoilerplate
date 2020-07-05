const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules:[ 
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use:[
				{
				loader: "babel-loader",
				}
			] ,
		},
		 {
			test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					
						 'file-loader',
					
				],
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
					
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			//Options similar to the same options
			//both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
	]
}