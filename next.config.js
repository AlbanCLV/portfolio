/**
 * next.config.js
 * Configure basePath and assetPrefix so static assets work when hosted at /portfolio on GitHub Pages.
 */

const repoName = '/portfolio'

module.exports = {
  // When exporting static HTML, Next will use this as the base path for pages
  basePath: repoName,
  // Prefix for assets (CSS, JS, images)
  assetPrefix: repoName,
  // Ensure static export output
  output: 'export',
  // Optional: ensure trailing slash for exported files compatibility
  trailingSlash: true,
  // expose the base path to client code at build time so our assetPath helper can use it
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
}
