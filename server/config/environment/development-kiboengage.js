'use strict'

// Development specific configuration
// ==================================
module.exports = {

  // Server port
  port: 3031,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/local-kibodblayer-kiboengage-prod'
  },
  seedDB: false
}
