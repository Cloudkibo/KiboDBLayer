const config = require('../config/environment/index')

exports.serverLog = function (label, data) {
  const namespace = `KiboDBLayer:${label}`
  const debug = require('debug')(namespace)

  if (config.env === 'development' || config.env === 'staging') {
    debug(data)
    // todo use log levels like info, warn, error and debug
    // logger.info(`${namespace} - ${data}`)
  }
}
