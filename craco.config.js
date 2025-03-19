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
            // 移除现有的 ESLint 配置
            const eslintRule = webpackConfig.module.rules.find(
                (rule) =>
                    rule.use &&
                    rule.use.some((use) => use.loader && use.loader.includes('eslint-loader')),
            );
            if (eslintRule) {
                webpackConfig.module.rules = webpackConfig.module.rules.filter(
                    (rule) => rule !== eslintRule,
                );
            }
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
