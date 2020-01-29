'use strict'

// Development specific configuration
// ==================================
module.exports = {

  // Server port
  port: 3030,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/local-kibodblayer-kibochat-prod'
  },
  seedDB: false
}
