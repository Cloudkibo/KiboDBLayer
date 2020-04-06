let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotSchema = new Schema({
  pageId: String,
  companyId: String,
  userId: String,
  datetime: { type: Date, default: Date.now },
  usedBy: Number,
  triggers: [String],
  startingBlockId: String,
  maxLevels: {
    type: Number,
    default: 3
  },
  published: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('chatbots', chatbotSchema)
