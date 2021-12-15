const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require ('copy-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
              test: /\.(js)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                //   'style-loader',
                  'css-loader',
                //   'sass-loader',
                ]
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html',
          filename: './index.html'
        }),
        new MiniCssExtractPlugin ({
          filename:'[name].css'
        }),
        new CopyPlugin ({
            patterns:[
                {
                    from: path.resolve(__dirname, 'src','assets/images'),
                    to: "assets/images",
                }
            ]
        })
      ],
      devServer:{
         //contentBase: path.join(__dirname, 'dist'),
          compress: true,
          historyApiFallback: true,
          port: 3008
      }
    
    }