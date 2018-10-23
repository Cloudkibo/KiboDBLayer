let mongoose = require('mongoose')
let Schema = mongoose.Schema

const sequenceSchema = new Schema({
  name: String,
  companyId: { type: String },
  userId: { type: String },
  trigger: {type: Schema.Types.Mixed, default: {event: 'subscribe_to_sequence', value: null}},
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('sequences', sequenceSchema)
