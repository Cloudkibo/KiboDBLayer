let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotSubscribersJourneySchema = new Schema({
  chatbotId: String,
  companyId: String,
  subscriber: {
    id: String,
    name: String
  },
  time: { type: Date, default: Date.now },
  messageBlockId: String,
  messageBlockTitle: String,
  blocksPath: [{
    id: String,
    title: String,
    isParent: Boolean,
    isChild: Boolean,
    parentId: String
  }]
})

module.exports = mongoose.model('chatbotSubscribersJourney', chatbotSubscribersJourneySchema)
