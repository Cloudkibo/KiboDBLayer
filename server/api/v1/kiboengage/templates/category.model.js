const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: String,
  userId: { type: String },
  companyId: { type: String },
  createdBySuperUser: {type: Boolean, default: false}
})

module.exports = mongoose.model('category', categorySchema)
