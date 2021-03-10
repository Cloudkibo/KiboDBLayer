'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CodVerificationPages = new Schema({
  companyId: String,
  contactId: String,
  datetime: { type: Date, default: Date.now },
  order: String,
  storeType: String, // shopify
  storeName: String
})

module.exports = mongoose.model('codverificationpages', CodVerificationPages)
