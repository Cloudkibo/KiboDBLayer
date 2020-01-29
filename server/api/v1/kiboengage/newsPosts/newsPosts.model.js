const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newsPostsSchema = new Schema({
  newsSectionId: {type: Schema.ObjectId, ref: 'newsSections'},
  companyId: String,
  pageId: String,
  clicked: {type: Number, default: 0},
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('newsPosts', newsPostsSchema)
