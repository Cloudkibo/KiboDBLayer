let mongoose = require('mongoose')

let Schema = mongoose.Schema

let queueSchema = new Schema({
  platform: { type: String },
  payload: Schema.Types.Mixed
})

module.exports = mongoose.model('queue', queueSchema)
