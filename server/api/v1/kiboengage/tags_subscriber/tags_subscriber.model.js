let mongoose = require('mongoose')
let Schema = mongoose.Schema

const tagSchema = new Schema({
  tagId: {type: String}, // will be updated later
  subscriberId: {type: String},
  companyId: {type: String},
  dateCreated: {type: Date, default: Date.now}
})

module.exports = mongoose.model('tags_subscribers', tagSchema)
