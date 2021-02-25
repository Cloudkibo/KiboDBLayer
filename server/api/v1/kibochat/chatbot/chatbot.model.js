let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotSchema = new Schema({
  pageId: String,
  companyId: String,
  userId: String,
  datetime: { type: Date, default: Date.now },
  usedBy: { type: Number, default: 0 },
  startingBlockId: String,
  type: String, // values: manual, automated
  vertical: String, // set only if type is automated, values: banking, commerce etc,
  storeType: String, // set only if type is commerce, values: shopify, bigcommerce etc
  botLinks: {
    faqs: { type: String, default: '' },
    paymentMethod: { type: String, default: '' },
    returnPolicy: { type: String, default: '' }
  },
  maxLevels: {
    type: Number,
    default: 3
  },
  published: {
    type: Boolean,
    default: false
  },
  stats: {
    triggerWordsMatched: { // How many times this bot got triggered using trigger words
      type: Number,
      default: 0
    },
    newSubscribers: { // How many times this bot was started using get started button, i.e. how many new subscribers came to this bot
      type: Number,
      default: 0
    }
  },
  fallbackReply: { type: Schema.Types.Mixed, default: [] },
  fallbackReplyEnabled: { type: Boolean, default: false },
  isYoutubePlayable: { type: Boolean, default: true },
  testSession: {
    subscriberId: String,
    sessionStartTime: { type: Date, default: Date.now }
  },
  builderPreference: {
    type: String, default: 'basic'
  },
  numberOfProducts: {
    type: Number,
    default: 9
  },
  faqs: Array,
  returnOrderMessage: {type: String, default: 'Dear Valuable Customer,\n\nThank you for contacting us. We have received the ‘Return’ request of your order #{{orderId}}. You are requested to please allow us some time, one of our representative will contact you for further details and confirmation'},
  cancelOrderMessage: {type: String, default: 'Dear Valuable Customer,\n\nThank you for contacting us. We have received the cancellation ‘Request’ of your order #{{orderId}}. One of our representatives will contact you shortly for further details and confirmation'},
  returnOrder: {type: Boolean, default: true},
  cancelOrder: {type: Boolean, default: true},
  businessId: String,
  catalogId: String,
  catalog: {
    name: { type: String },
    url: { type: String }
  }
})

module.exports = mongoose.model('chatbots', chatbotSchema)
