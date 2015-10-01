var path = require('path');

module.exports = {
    target: 'web',
    cache: true,
    watch: true,
    entry: {
        app: path.join(__dirname, 'app', 'bootstrap.js')
    },
    output: {
        publicPath: '/',
        filename: 'bundle.[name].js'
    },
    resolve: {
        modulesDirectories: [ 'node_modules' ],
        extensions: ['', '.js', '.jsx'],
        alias: {
            app: path.join(__dirname, 'app'),
            css: path.join(__dirname, 'public', 'stylesheets')
        }
    },
    resolveLoader: { root: path.join(__dirname, 'node_modules') },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'jsx-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    optional: [
                        'runtime',
                        'es7.comprehensions',
                        'es7.classProperties',
                        'es7.functionBind',
                        'es7.decorators',
                        'es7.exportExtensions',
                        'es7.trailingFunctionCommas',
                        'es7.exponentiationOperator',
                        'es7.asyncFunctions',
                        'es7.objectRestSpread'
                    ]
                }
            }
        ]
    }
};
