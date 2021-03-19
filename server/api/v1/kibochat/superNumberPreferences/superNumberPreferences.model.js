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
  },
  share_button: {
    enabled: {type: Boolean, default: false},
    btnDesign: {
      backgroundColorStyle: { type: String }, // values single or gradient
      backgroundColor1: { type: String }, // hex color code
      backgroundColor2: { type: String }, // only set when backgroundColorStyle is gradient
      iconColor: { type: String }, // hex color code
      btnTextColor: { type: String } // hex color code
    },
    textMessage: {
      shareBtnText: { type: String, default: 'Share' }, // by default should be text from super lemon
      shareMessage: { type: String }
    },
    displayPosition: {
      display: { type: String, default: 'both' }, // values: [mobile, desktop, both] // by default both
      mobilePosition: { type: String, default: 'right' }, // values: [left, right] // default right
      desktopPosition: { type: String, default: 'right' } // values: [left, right] // default right
    },
    displayPages: {
      homePage: {type: Boolean, default: true},
      collectionsPage: {type: Boolean, default: true},
      productPages: {type: Boolean, default: true},
      cartPage: {type: Boolean, default: true},
      thankyouPage: {type: Boolean, default: false},
      blogPostPages: {type: Boolean, default: true},
      accountPages: {type: Boolean, default: false},
      urlsEndinginPages: {type: Boolean, default: false}
    }
  }
})

module.exports = mongoose.model('superNumberPreferences', SuperNumberPreferences)
