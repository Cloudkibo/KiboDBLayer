let mongoose = require('mongoose')
let Schema = mongoose.Schema

const storeAnalyticsSchema = new Schema({
  storeId: { type: Schema.ObjectId, ref: 'storeInfo' },
  totalExtraSales: { type: Number, default: 0 },
  totalAbandonedCarts: { type: Number, default: 0 },
  totalPurchasedCarts: { type: Number, default: 0 },
  totalSubscribers: {type: Number, default: 0},
  totalPushSent: {type: Number, default: 0},
  totalClicks: {type: Number, default: 0}
})

module.exports = mongoose.model('storeAnalytics', storeAnalyticsSchema)
