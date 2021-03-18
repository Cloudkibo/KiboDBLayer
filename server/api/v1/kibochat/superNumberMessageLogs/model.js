'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let SuperNumberMessageLogs = new Schema({
  automatedMessage: {type: Boolean},
  messageType: String,
  companyId: String,
  datetime: { type: Date, default: Date.now },
  customerName: String,
  customerNumber: String,
  id: String,
  url: String,
  amount: String,
  currency: String,
  status: String
})

module.exports = mongoose.model('superNumberMessageLogs', SuperNumberMessageLogs)
