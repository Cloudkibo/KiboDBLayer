// Production specific configuration
// ==================================
module.exports = {

  // Server port
  port: process.env.PORT || 5000,
  
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/kibodblayer-kiboengage-staging'
  },
  seedDB: false
}
