let mongoose = require('mongoose')

let Schema = mongoose.Schema

let WhatsAppChatbotSchema = new Schema({
  companyId: String,
  userId: String,
  datetime: { type: Date, default: Date.now },
  usedBy: { type: Number, default: 0 },
  triggers: { type: Array, default: [] },
  botLinks: new Schema({
    faqs: { type: String, default: '' },
    paymentMethod: { type: String, default: '' },
    returnPolicy: { type: String, default: '' }
  }),
  testSubscribers: { type: Array, default: [] },
  startingBlockId: String,
  maxLevels: { type: Number, default: 3 },
  published: { type: Boolean, default: false },
  stats: new Schema({
    triggerWordsMatched: { type: Number, default: 0 },
    newSubscribers: { type: Number, default: 0 }
  })
})

module.exports = mongoose.model('whatsapp_chatbot', WhatsAppChatbotSchema)
