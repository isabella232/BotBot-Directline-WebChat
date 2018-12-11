var webpack = require('webpack');
require('expose-loader');

var coreConfig = {
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [/node_modules/]
      },
      {
        test: require.resolve('microsoft-adaptivecards'),
        use: [{ loader: 'expose-loader', options: 'AdaptiveCards' }]
      }
    ]
  }
};

var chatConfig = {
  entry: {
    botchat: './src/BotChat.ts',
    form: './src/kcc-form'
  },
  output: {
    libraryTarget: 'umd',
    library: 'BotChat',
    filename: '[name].js'
  }
};

// Config for addon features
var featureConfig = {
  entry: {
    CognitiveServices: './src/CognitiveServices/lib.ts'
  },
  output: {
    libraryTarget: 'umd',
    library: '[name]',
    filename: './[name].js'
  }
};

var integrationConfig = {
  entry: './botbot-integration.js',
  output: {
    filename: './botbot-integration-min.js'
  }
};

module.exports = [
  Object.assign(chatConfig, coreConfig),
  Object.assign(featureConfig, coreConfig),
  Object.assign(integrationConfig, coreConfig)
];
