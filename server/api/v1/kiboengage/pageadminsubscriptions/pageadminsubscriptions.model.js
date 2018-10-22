'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PageAdminSubscriptionsSchema = new Schema({

  companyId: { type: String },
  userId: { type: String },
  subscriberId: String,
  pageId: { type: String }

})

module.exports = mongoose.model('pageadminsubscriptions', PageAdminSubscriptionsSchema)
