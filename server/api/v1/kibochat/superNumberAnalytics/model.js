'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let SuperNumberAnalytics = new Schema({
  automatedMessage: {type: Boolean},
  messageType: String,
  companyId: String,
  datetime: { type: Date, default: Date.now },
  messagesSent: { type: Number, default: 0 }
})

module.exports = mongoose.model('superNumberAnalytics', SuperNumberAnalytics)
