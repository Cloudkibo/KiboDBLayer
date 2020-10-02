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
  storeType: String
})

module.exports = mongoose.model('whatsapp_chatbot', WhatsAppChatbotSchema)
