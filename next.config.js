const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
};
