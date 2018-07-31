var webpack = require('webpack');
require("expose-loader");

var coreConfig = {
    mode: 'development',

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/]
            },
            {
                test: require.resolve('microsoft-adaptivecards'),
                use: [{ loader: 'expose-loader', options: 'AdaptiveCards' }]
            }
        ]
    },
};

var chatConfig = {
    entry: "./src/BotChat.ts",
    output: {
        path: __dirname,
        libraryTarget: "umd",
        library: "BotChat",
        filename: "botchat.js"
    }
}

// Config for addon features
var featureConfig = {
    entry: {
        CognitiveServices: "./src/CognitiveServices/lib.ts"
    },
    output: {
        path: __dirname,
        libraryTarget: "umd",
        library: "[name]",
        filename: "[name].js",
    }
}

module.exports = [Object.assign(chatConfig, coreConfig), Object.assign(featureConfig, coreConfig)];
