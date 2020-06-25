let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotSchema = new Schema({
  pageId: String,
  companyId: String,
  userId: String,
  datetime: { type: Date, default: Date.now },
  usedBy: { type: Number, default: 0 },
  startingBlockId: String,
  maxLevels: {
    type: Number,
    default: 3
  },
  published: {
    type: Boolean,
    default: false
  },
  fallbackReply: { type: Schema.Types.Mixed, default: [] },
  fallbackReplyEnabled: { type: Boolean, default: false }
})

module.exports = mongoose.model('chatbots', chatbotSchema)
