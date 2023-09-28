module.exports = {
    // Các cấu hình khác...
    webpack: (config) => {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      });
      return config;
    },
  };