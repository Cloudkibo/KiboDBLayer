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
  scheduled_at: {
    type: Date,
    default: () => Date.now() + 24 * 60 * 60 * 1000
  },
  isPurchased: {
    type: Boolean,
    default: false
  },
  isExtraSales: {
    type: Boolean,
    default: false
  },
  sentCount: {
    type: Number,
    default: 0
  },
  subscriberId: {
    type: String
  }
})

module.exports = mongoose.model('checkoutInfo', checkoutSchema)
