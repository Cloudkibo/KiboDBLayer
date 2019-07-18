let mongoose = require('mongoose')
let Schema = mongoose.Schema

const checkoutSchema = new Schema({
  shopifyCheckoutId: {
    type: String
  },
  checkoutToken: {
    type: String
  },
  cartToken: {
    type: String
  },
  storeId: {
    type: Schema.ObjectId,
    ref: 'storeInfo' // Schema.ObjectId, ref: 'storeId'
  },
  userId: {
    type: String
  },
  companyId: {
    type: String
  },
  totalPrice: {
    type: Number
  },
  abandonedCheckoutUrl: {
    type: String
  },
  status: {
    type: String
  },
  userRef: {
    type: String
  },
  productIds: {
    type: [String]
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  orderId: {
    type: String
  },
  number: {
    type: Number
  },
  subscriberId: {
    type: String
  }
})

module.exports = mongoose.model('orderinfo', checkoutSchema)
