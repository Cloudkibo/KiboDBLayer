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
  },
  sendOrderUpdates: { type: Boolean, default: true },
  cartAlertEnabled: { type: Boolean, default: true },
  schedule: {type: Date, default: Date.now},
  alertMessage: {type: String}
})

module.exports = mongoose.model('storeInfo', storeSchema)
