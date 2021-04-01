let mongoose = require('mongoose')
let Schema = mongoose.Schema

let smsChatbotSchema = new Schema({
  companyId: String,
  userId: String,
  title: String,
  vertical: {
    type: String,
    enum: ['ecommerce', 'other']
  },
  triggers: { type: Array, default: ['hi', 'hello'] },
  published: {
    type: Boolean,
    default: false
  },
  integration: {
    type: String,
    enum: ['shopify', 'bigcommerce']
  },
  numberOfProducts: {
    type: Number,
    default: 9
  },
  catalog: {
    name: { type: String },
    url: { type: String }
  },
  testSubscribers: { type: Array, default: [] },
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('smsChatbots', smsChatbotSchema)
