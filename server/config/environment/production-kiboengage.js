// Production specific configuration
// ==================================
module.exports = {

  // Server port
  port: process.env.PORT || 5000,

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/kibodblayer-kiboengage-prod'
  },
  seedDB: false,
  papertrail_log_levels: process.env.PAPERTRAIL_LOG_LEVELS
}
