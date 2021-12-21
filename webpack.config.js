const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: resolve(__dirname, 'dist'), // 打包后的资源出口路径，在dist目录下
        filename: "js/built.js" // 入口index.js，打包后在js目录下的built.js文件
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024, // 8kb以下base64输出
                    name: '[hash:10].[ext]',
                    outputPath: 'img', // dist的img目录下
                },
            },
            // 处理html中的img资源
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            // 其他资源，如字体
            {
                exclude: /\.(html|js|css|less|png|jpg|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media', // dist的media目录下
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        compress: true,
        port: 9000,
        open: true,
    },
    mode: 'development'
}