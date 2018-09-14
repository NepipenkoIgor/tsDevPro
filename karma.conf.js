module.exports = (config) => {
  config.set({
    frameworks: ['jasmine', 'commonjs'],
    files: [
      { pattern: 'lesson-10/**/*.js' },
    ],
    preprocessors: {
      'lesson-10/**/*.js': ['babel', 'commonjs'],
      'lesson-10/main.js': ['babel', 'commonjs', 'coverage'],
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline',
        plugins: ['transform-es2015-modules-umd'],
      },
      sourceFileName(file) {
        return file.originalPath;
      },
    },
    reporters: ['progress', 'coverage'],
    // browsers: ['Chrome'],
    browsers: ['ChromeHeadless'],
    singleRun: 'true',
  });
};
