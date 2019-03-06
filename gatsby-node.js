const { resolve } = require('path');

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      root: resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json'],
    },
  });
  return config;
};
