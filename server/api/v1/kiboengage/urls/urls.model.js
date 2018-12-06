let mongoose = require('mongoose')

let Schema = mongoose.Schema

let urlSchema = new Schema({
  originalURL: String,
  subscriberId: String,
  module: Schema.Types.Mixed
})

module.exports = mongoose.model('URL', urlSchema)
