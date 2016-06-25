// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    url: 'http://ktquez.surge.sh',
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    url: 'http://www.ktquez.com',
    env: require('./dev.env'),
    port: 80,
    proxyTable: {}
  }
}
