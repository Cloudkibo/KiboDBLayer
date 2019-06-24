let mongoose = require('mongoose')
let Schema = mongoose.Schema

const storeSchema = new Schema({
  userId: {
    type: String
  },
  pageId: {
    type: String
  },
  shopUrl: {
    type: String
  },
  shopToken: {
    type: String
  },
  companyId: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('storeInfo', storeSchema)
