const path = require('path')
const _ = require('lodash')

const all = {
  env: process.env.NODE_ENV || 'staging',

  secrets: {
    session: process.env.SESSION_SECRET || 'some string'
  },

  // Project root path
  root: path.normalize(`${__dirname}/../../..`),

  ip: process.env.IP || undefined,

  domain: `${process.env.DOMAIN || 'project domain'}`,

  // Mongo Options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
}

module.exports = _.merge(
  all,
  require(`./${process.env.NODE_ENV}-${process.env.NODE_APP}.js`) || {})
