'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let SuperNumberPreferences = new Schema({
  companyId: String,
  datetime: { type: Date, default: Date.now },
  abandonedCart: {
    language: {type: String, default: 'english'},
    supportNumber: { type: String },
    enabled: {type: Boolean, default: false}
  },
  orderCRM: {
    language: {type: String, default: 'english'},
    supportNumber: { type: String },
    shipmentEnabled: {type: Boolean, default: false},
    confirmationEnabled: {type: Boolean, default: false}
  },
  cashOnDelivery: {
    language: {type: String, default: 'english'},
    supportNumber: { type: String },
    enabled: {type: Boolean, default: false},
    cod_tags: { type: Schema.Types.Mixed,
      default: {
        confirmed_tag: 'CODConfirmed-KiboPush',
        cancelled_tag: 'CODCancelled-KiboPush',
        no_response_tag: 'CODNoResponse-KiboPush'
      }
    }
  },
  optin_widget: {
    language: {type: String, default: 'english'},
    enabled: {type: Boolean, default: true},
    settings: {
      addToCartClicked: {type: Boolean, default: false},
      buyNowClicked: {type: Boolean, default: true},
      landingOnCartPage: {type: Boolean, default: false},
      checkoutClicked: {type: Boolean, default: true},
      thankYouPage: {type: Boolean, default: true}
    }
  }
})

module.exports = mongoose.model('superNumberPreferences', SuperNumberPreferences)
