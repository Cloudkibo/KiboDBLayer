let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotBackupSchema = new Schema({
  chatbotId: { type: Schema.Types.ObjectId, ref: 'chatbots' },
  pageId: String,
  companyId: String,
  userId: String,
  datetime: { type: Date, default: Date.now },
  triggers: [String],
  startingBlockId: String
})

module.exports = mongoose.model('chatbots_backup', chatbotBackupSchema)
