'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CannedResponses = new Schema({
  companyId: String,
  userId: String,
  responseCode: String,
  responseMessage: String,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('cannedResponses', CannedResponses)
