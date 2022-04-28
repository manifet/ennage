const webpack = require("webpack");
const {merge} = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        open: true,
        port: 8080,
        static: {
            directory: baseWebpackConfig.externals.paths.dist
        },
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
});
module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
