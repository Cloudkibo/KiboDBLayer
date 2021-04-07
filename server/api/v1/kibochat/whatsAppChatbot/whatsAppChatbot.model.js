let mongoose = require('mongoose')

let Schema = mongoose.Schema

let WhatsAppChatbotSchema = new Schema({
  companyId: String,
  userId: String,
  datetime: { type: Date, default: Date.now },
  usedBy: { type: Number, default: 0 },
  triggers: { type: Array, default: ['hi', 'hello'] },
  botLinks: {
    faqs: { type: String, default: '' },
    paymentMethod: { type: String, default: '' },
    returnPolicy: { type: String, default: '' }
  },
  testSubscribers: { type: Array, default: [] },
  startingBlockId: String,
  maxLevels: { type: Number, default: 3 },
  published: { type: Boolean, default: false },
  stats: {
    triggerWordsMatched: { type: Number, default: 0 },
    newSubscribers: { type: Number, default: 0 }
  },
  type: String, // values: manual, automated
  vertical: String, // set only if type is automated, values: banking, commerce, airlines etc,
  storeType: String, // set only if type is commerce, values: shopify, bigcommerce etc
  numberOfProducts: {
    type: Number,
    default: 9
  },
  faqs: Array,
  returnOrderMessage: {type: String, default: 'Dear Valuable Customer,\n\nThank you for contacting us. We have received the ‘Return’ request of your order #{{orderId}}. You are requested to please allow us some time, one of our representative will contact you for further details and confirmation'},
  cancelOrderMessage: {type: String, default: 'Dear Valuable Customer,\n\nThank you for contacting us. We have received the cancellation ‘Request’ of your order #{{orderId}}. One of our representatives will contact you shortly for further details and confirmation'},
  returnOrder: {type: Boolean, default: true},
  cancelOrder: {type: Boolean, default: true},
  catalog: {
    name: { type: String },
    url: { type: String }
  }
})

module.exports = mongoose.model('whatsapp_chatbot', WhatsAppChatbotSchema)
