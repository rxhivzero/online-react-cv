const cracoAlias = require('craco-alias');
const webpack = require('webpack');
const { version } = require('./package.json');

module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                source: 'jsconfig',
                baseUrl: './src',
            },
        },
    ],
    devServer: {
        port: 3000,
    },
    webpack: {
        configure: (webpackConfig) => {
            return webpackConfig;
        },
        plugins: [
            // 動態寫入version
            new webpack.DefinePlugin({
                'process.env.version': JSON.stringify(version),
            }),
        ],
    },
};
