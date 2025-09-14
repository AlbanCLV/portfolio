const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
};

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d out"
}
