/* this is a generic version of the config file. To use this file:
1 - change the port used for development to a unique number
2 - change the name and exposes sections of the ModuleFederationPlugin
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3001,
        historyApiFallback : {
            index : '/index.html'
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new ModuleFederationPlugin({
            // name is hello world namespace -- cannot have hyphens -- standard lowercase
            name : 'helloworld',
            // need to customize filename instead of remoteEntry for larger microapplications
            filename : 'remoteEntry.js',
            exposes : //eventually this is hello world -- will replace main
                {'./HelloWorld' : './src/indexHelloWorld'}
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
