const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {

    config.set({ 

        browsers: ['PhantomJS'],

        frameworks: ['mocha', 'sinon', 'chai'],

        files: [ 
            'src/**/*-test.jsx'
        ],

        reporters: ['mocha'],

        preprocessors: {
            'src/**/*-test.jsx': ['webpack']
        },

        webpack: {
            module: webpackConfig.module,
            resolve: {
                alias: {
                    sinon: 'sinon/pkg/sinon.js',
                },
            }
        },

        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-chai'),
            require('karma-sinon'),
            require('karma-sinon-chai'),
            require('karma-mocha-reporter'),
            require('karma-phantomjs-launcher')
        ],

	webpack: webpackConfig,
    });
};
