const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',

    proxy({
      target: 'http://10.120.74.70:3001',

      changeOrigin: true,
    })
  )
}