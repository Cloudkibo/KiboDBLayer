const http = require('http')
const logger = require('./../components/logger')
const TAG = 'config/setup.js'

const util = require('util')

module.exports = function (app, config) {
  const server = http.createServer(app)

  server.listen(config.port, () => {
    logger.serverLog(TAG, `KiboDBLayer server STARTED on ${
      config.port} in ${config.env} mode for ${process.env.NODE_APP}`)
    logger.serverLog(TAG, `Config for this droplet is: ${util.inspect(config)}`)
  })

  if (config.env === 'production') {
    console.log('KiboEngage server STARTED on %s in %s mode', config.port, config.env)
  }
}
