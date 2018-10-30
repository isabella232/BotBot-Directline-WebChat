var webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

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
        NODE_ENV: JSON.stringify('production'),
        SECRET:
          process.env.SECRET ||
          JSON.stringify('BXaEw4_juQg.cwA.MDQ.n_iF4s39hH0WNLUj0acYL6jCmCUPjcp02oo8KfmCaYM')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CheckerPlugin()
  ],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
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
  entry: './src/BotChat.ts',
  output: {
    libraryTarget: 'umd',
    library: 'BotChat',
    filename: './botchat.js'
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

module.exports = [Object.assign(chatConfig, coreConfig), Object.assign(featureConfig, coreConfig)];
