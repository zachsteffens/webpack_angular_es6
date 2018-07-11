import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//set noInfo to true in your projects to declutter the command line output
export default {
    devtool: 'inline-source-map',
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
            //alternatively, you can use ejs to manually inject bundle js into the dev file.
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
