'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let SuperNumberWidgetAnalytics = new Schema({
  widgetType: String,
  pageUrl: String,
  companyId: String,
  datetime: { type: Date, default: Date.now },
  clickCounts: { type: Number, default: 0 }
})
module.exports = mongoose.model('superNumberWidgetAnalytics', SuperNumberWidgetAnalytics)
