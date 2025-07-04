const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/my-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};
