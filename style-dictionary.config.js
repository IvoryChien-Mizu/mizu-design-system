const { registerTransforms } = require('@tokens-studio/sd-transforms');

registerTransforms(); // Enable Tokens Studio transforms

module.exports = {
  source: ['tokens/**/*.json'], // include your primitive + semantic token JSONs
  platforms: {
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables' // This will output: $sd-color-background-default: #fff;
      }]
    },
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables' // This will output: --sd-color-background-default: #fff;
      }]
    }
  }
};