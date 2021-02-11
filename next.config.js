const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/bernard9090/unify-support-portal.github.io/gh-pages/' : '',
};