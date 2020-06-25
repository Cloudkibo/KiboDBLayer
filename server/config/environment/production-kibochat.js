// Production specific configuration
// ==================================
module.exports = {

  // Server port
  port: process.env.PORT || 5000,

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/kibodblayer-kibochat-prod'
  },
  seedDB: false,

  api_urls: {
    kiboengage: `${process.env.DB_LAYER_IP_KIBOENGAGE}/api/v1`
  }
}
