let mongoose = require('mongoose')
let Schema = mongoose.Schema

const tagSchema = new Schema({
  tag: {type: String},
  userId: {type: String},
  companyId: {type: String},
  dateCreated: {type: Date, default: Date.now}
})

module.exports = mongoose.model('tags', tagSchema)
