const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newsPostSubscribersSchema = new Schema({
  newsSectionId: {type: Schema.ObjectId, ref: 'newsSections'},
  newsPostId: {type: Schema.ObjectId, ref: 'newsPosts'},
  companyId: String,
  pageId: String,
  subscriberId: String,
  sent: Boolean,
  seen: Boolean,
  clicked: Boolean,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('newsPostSubscribers', newsPostSubscribersSchema)
