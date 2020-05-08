let mongoose = require('mongoose')
let Schema = mongoose.Schema

let messageBlocksBackupSchema = new Schema({
  module: { type: Schema.Types.Mixed },
  blockId: String,
  companyId: String,
  userId: String,
  blockUniqueId: String,
  title: String,
  payload: { type: Schema.Types.Mixed },
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('messageBlocks_backup', messageBlocksBackupSchema)
