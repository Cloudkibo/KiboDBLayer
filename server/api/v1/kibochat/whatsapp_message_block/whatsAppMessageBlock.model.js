let mongoose = require('mongoose')

let Schema = mongoose.Schema

let WhatsAppMessageBlock = new Schema({
  module: { type: Schema.Types.ObjectId, ref: 'whatsapp_chatbot' },
  uniqueId: String,
  payload: { type: Array, default: [] },
  userId: String,
  companyId: String,
  title: String,
  stats: new Schema({
    sentCount: Number
  })
})

module.exports = mongoose.model('whatsapp_message_block', WhatsAppMessageBlock)
