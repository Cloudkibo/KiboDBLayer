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
  },
  chat_widget: {
    enabled: {type: Boolean, default: true},
    agentsLimit: {type: Number, default: 6},
    agents: { type: Array },
    btnDesign: {
      backgroundColorStyle: {type: String},
      backgroundColor1: {type: String}, // hex color code
      backgroundColor2: {type: String}, // only set when backgroundColorStyle is gradient
      iconColor: {type: String}, // hex color code
      btnTextColor: {type: String} // hex color code
    },
    textMessage: {
      shareBtnText: {type: String, default: 'Chat with us'},
      shareMessage: {type: String, default: `I'm interested in this product and I have a few questions. Can you help?`},
      includePageURL: {type: Boolean, default: true}
    },
    callOutCard: {
      enabled: {type: Boolean, default: true},
      cardText: {type: String},
      cardDelay: {type: Number, default: 5}
    },
    greetingsWidget: {
      backgroundColorStyle: {type: String},
      backgroundColor1: {type: String}, // hex color code
      backgroundColor2: {type: String}, // only set when backgroundColorStyle is gradient
      headingColor: {type: String}, // hex color code
      descriptionColor: {type: String} // hex color code
    },
    titleText: {type: String, default: 'Hi there ?'},
    helpText: {type: String, default: 'We are here to help. Chat with us on WhatsApp for any queries.'},
    offlineStoreMsg: {type: String, default: '“Hi, our working hours are <start time> to <end time>, request you to reach us at the same time. Apologies for the inconvenience.'},
    randomAgentsOrder: {type: Boolean, default: true},
    displayPosition: {
      display: {type: String, default: 'both'},
      mobilePosition: {type: String, default: 'right'},
      desktopPosition: {type: String, default: 'right'},
      desktopHeightOffset: {type: Number, default: 20},
      desktopEdgeOffset: {type: Number, default: 20},
      mobileHeightOffset: {type: Number, default: 20},
      mobileEdgeOffset: {type: Number, default: 20}
    },
    displayPages: {
      homePage: {type: Boolean, default: true},
      collectionsPage: {type: Boolean, default: true},
      productPages: {type: Boolean, default: true},
      cartPageDesktop: {type: Boolean, default: true},
      cartPageMobile: {type: Boolean, default: false},
      blogPostPages: {type: Boolean, default: true},
      accountPages: {type: Boolean, default: true},
      urlsEndinginPages: {type: Boolean, default: true}
    }
  }
})

module.exports = mongoose.model('superNumberPreferences', SuperNumberPreferences)
