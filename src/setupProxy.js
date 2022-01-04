const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',

    proxy({
      target: 'http://192.168.0.117:3001',

      changeOrigin: true,
    })
  )
}