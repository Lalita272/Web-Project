module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: 'asset',
            test: /\.(png|jpg|jpeg|gif)$/i,
          },
        ],
      },
    },
  },
}; 