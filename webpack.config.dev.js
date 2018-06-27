import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//set noInfo to true in your projects to declutter the command line output
export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/app.module.js')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [ 'babel' ]
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css']
        },
        {
            test: /\.html$/,
            loader: 'html'
        }]
    }
};
