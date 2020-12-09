'use strict'

// Development specific configuration
// ==================================
module.exports = {

  // Server port
  port: 3030,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/kibodblayer-kibochat-dev'
  },
  seedDB: false,

  api_urls: {
    kiboengage: `http://localhost:3031/api/v1`
  },
  papertrail_log_levels: ''
}
