let mongoose = require('mongoose')
let Schema = mongoose.Schema

let messageStatistics = new Schema({
  featureName: { type: String },
  messageCount: { type: Number, default: 0 },
  day: {type: String},
  month: {type: String},
  year: {type: String},
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('messageStatistics', messageStatistics)
