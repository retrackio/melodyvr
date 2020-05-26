require('dotenv').config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack: (config, { webpack }) => {
    config.node = {
      fs: 'empty',
    };
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\/*\.test\.(ts|tsx)$/,
      }),
    );
    return config;
  },
  poweredByHeader: false,
  pageExtensions: ['tsx'],
  env: {
    LOG_LEVEL: process.env.LOG_LEVEL,
    API_BASE_URL: process.env.API_BASE_URL,
  },
});
