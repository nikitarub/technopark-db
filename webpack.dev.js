const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode : 'development',

    watch : true,
    watchOptions : {
        ignored : /node_modules/
    },

    entry : {
        main : './forum/server/index.js'
    },

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
    },
    
    devtool : 'inline-source-map',

    target : 'node',
    externals : [nodeExternals()],

    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ] 
    },

    plugins : [
        new CleanWebPackPlugin(['dist'])
    ]
}