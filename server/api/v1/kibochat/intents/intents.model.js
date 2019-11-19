'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Intents = new Schema({
  botId: {type: Schema.Types.ObjectId, ref: 'bots'},
  dialogflowIntentId: String,
  name: String,
  questions: [String],
  answer: Schema.Types.Mixed,
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('intents', Intents)
