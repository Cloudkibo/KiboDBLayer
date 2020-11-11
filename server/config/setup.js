const http = require('http')
const logger = require('./../components/logger')
const TAG = 'config/setup.js'

const util = require('util')

module.exports = function (app, config) {
  const server = http.createServer(app)

  server.listen(config.port, () => {
    logger.serverLog(`KiboDBLayer server STARTED on ${
      config.port} in ${config.env} mode for ${process.env.NODE_APP}`, TAG, {}, {port: config.port, env: config.env}, 'info')
    logger.serverLog(`Config for this droplet is: ${util.inspect(config)}`, TAG, {}, {config}, 'info')
  })

  if (config.env === 'production') {
    logger.serverLog('KiboEngage server STARTED on %s in %s mode', TAG, {}, {port: config.port, env: config.env}, 'info')
  }
}
