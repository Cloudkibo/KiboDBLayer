let mongoose = require('mongoose')

let Schema = mongoose.Schema

let broadcastResponses = new Schema({
  companyId: String,
  broadcastId: String,
  customerId: String, // contact id or subscriber id
  platform: {
    type: String,
    enum: ['sms', 'whatsApp', 'messenger']
  },
  response: Schema.Types.Mixed, // text or attachment,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('broadcastResponses', broadcastResponses)
