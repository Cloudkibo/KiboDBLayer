let mongoose = require('mongoose')
let Schema = mongoose.Schema

let testSchema = new Schema({
  userMessage: {type: String}
})

module.exports = mongoose.model('test', testSchema)
