const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withSass({
  sassLoaderOptions: {},
  esModule: true,
  webpack(config, options) {
    return config;
  }
}));
