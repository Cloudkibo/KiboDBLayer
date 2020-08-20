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
  isYoutubePlayable: {type: Boolean, default: true},
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
