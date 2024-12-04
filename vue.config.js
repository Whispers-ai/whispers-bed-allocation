const webpack = require('webpack');
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
        global: 'global'
      }),
    ],
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/')
      }
    }
  }
};
