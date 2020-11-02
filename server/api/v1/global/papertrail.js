let config = require('../../../config/environment')
const winston = require('winston')

// eslint-disable-next-line no-unused-expressions
require('winston-papertrail').Papertrail

const logger = new winston.Logger({
  transports: [
    // new (winston.transports.Console)(),
    new winston.transports.Papertrail({
      host: 'logs3.papertrailapp.com',
      port: 45576,
      colorize: true,
      attemptsBeforeDecay: 1
    })
  ]
})

exports.sendToPaperTrail = function (label, data, type = 'info') {
  const debug = require('debug')(label)

  if (config.env === 'development' || config.env === 'test') {
    debug(data)
    console.log(`${label} - ${data}`)
    // todo use log levels like info, warn, error and debug
    // logger.info(`${namespace} - ${data}`)
  } else if (
    (config.env === 'production' && config.papertrail_log_levels.split(',').indexOf(type) > -1) ||
    config.env === 'staging'
  ) {
    logger.log(type, `${label} - ${data}`)
  }
}
