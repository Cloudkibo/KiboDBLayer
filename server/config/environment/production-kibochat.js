// Production specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/kibodblayer-kibochat-prod'
  },
  seedDB: false
}
