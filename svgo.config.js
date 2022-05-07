module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeUselessStrokeAndFill: false,
          cleanupIDs: false,
        },
      },
    },
  ],
};
