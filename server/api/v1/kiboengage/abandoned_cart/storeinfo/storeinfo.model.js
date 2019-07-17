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
  sendOrderUpdates: {
    type: Boolean,
    default: false
  },
  cartAlertEnabled: { // for sending message to customers for abandoned cart
    type: Boolean,
    default: true
  },
  schedule: {
    type: Schema.Types.Mixed,
    default: {
      condition: 'hours',
      value: '24'
    }
  },
  alertMessage: {
    type: String,
    default: 'Hey you forgot to complete this order on our store'
  }
})

module.exports = mongoose.model('storeInfo', storeSchema)
