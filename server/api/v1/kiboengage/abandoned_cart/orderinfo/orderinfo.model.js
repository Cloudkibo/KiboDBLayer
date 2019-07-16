let mongoose = require('mongoose')
let Schema = mongoose.Schema

const checkoutSchema = new Schema({
  shopifyCheckoutId: { //show
    type: String
  },
  checkoutToken: { //show
    type: String
  },
  cartToken: { //show
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
  totalPrice: { //show
    type: Number
  },
  abandonedCheckoutUrl: { //show
    type: String
  },
  status: { //show
    type: String
  },
  userRef: {
    type: String
  },
  productIds: {
    type: [String]
  },
  created_at: { //show
    type: Date,
    default: Date.now
  },
  fulfillmentId: {
    type: String
  },
  orderId: { //show
    type: String
  },
  subscriberId: {
    type: String
  }
})

module.exports = mongoose.model('orderinfo', checkoutSchema)
