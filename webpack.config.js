const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output: {
      path:path.join(__dirname,'/dist'),
        filename: "index.js"
    },
    devServer: {
        disableHostCheck: true, //webpack-dev-server/pull/1608
        historyApiFallback: true,
        host: 'localhost',
        port: 8081
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[ htmlWebpackPlugin]
};
