'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let SuperNumberPreferences = new Schema({
  companyId: String,
  datetime: { type: Date, default: Date.now },
  abandonedCart: {
    language: {type: String, default: 'english'},
    supportNumber: { type: String },
    enabled: {type: Boolean}
  },
  orderCRM: {
    language: {type: String, default: 'english'},
    supportNumber: { type: String },
    shipmentEnabled: {type: Boolean},
    confirmationEnabled: {type: Boolean}
  },
  cashOnDelivery: {
    language: {type: String, default: 'english'},
    supportNumber: { type: String },
    enabled: {type: Boolean},
    cod_tags: { type: Schema.Types.Mixed,
      default: {
        confirmed_tag: 'CODConfirmed-KiboPush',
        cancelled_tag: 'CODCancelled-KiboPush',
        no_response_tag: 'CODNoResponse-KiboPush'
      }
    }
  }
})

module.exports = mongoose.model('superNumberPreferences', SuperNumberPreferences)
