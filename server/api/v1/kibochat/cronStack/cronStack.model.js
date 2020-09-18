'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CronStack = new Schema({
  type: String,
  payload: Schema.Types.Mixed,
  datetime: { type: Date, default: Date.now }

}, {collection: 'cronstack'})

module.exports = mongoose.model('CronStack', CronStack)
