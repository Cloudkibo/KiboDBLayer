let mongoose = require('mongoose')
let Schema = mongoose.Schema

const abandonedSchema = new Schema({
  checkoutId: {
    type: String
  },
  subscriberId: {
    type: String
  },
  sendDate: {
    type: Date
  }
})

module.exports = mongoose.model('abandonedCheckout', abandonedSchema)
