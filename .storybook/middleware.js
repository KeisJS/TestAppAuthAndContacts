const { createProxyMiddleware } = require('http-proxy-middleware');
const packageJson = require('../package.json');

module.exports = function expressMiddleware(router) {
  const proxyConfig = packageJson.proxy;

  router.use('/api', createProxyMiddleware({
    target: proxyConfig
  }))
}
