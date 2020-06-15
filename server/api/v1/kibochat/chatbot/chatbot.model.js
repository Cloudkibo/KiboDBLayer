let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotSchema = new Schema({
  pageId: String,
  companyId: String,
  userId: String,
  datetime: { type: Date, default: Date.now },
  usedBy: { type: Number, default: 0 },
  triggers: [String],
  startingBlockId: String,
  maxLevels: {
    type: Number,
    default: 3
  },
  published: {
    type: Boolean,
    default: false
  },
  fallbackReply: { type: Schema.Types.Mixed },
  fallbackReplyEnabled: Boolean,
  stats: {
    triggerWordsMatched: { // How many times this bot got triggered using trigger words
      type: Number,
      default: 0
    },
    newSubscribers: { // How many times this bot was started using get started button, i.e. how many new subscribers came to this bot
      type: Number,
      default: 0
    }
  }
})

module.exports = mongoose.model('chatbots', chatbotSchema)
