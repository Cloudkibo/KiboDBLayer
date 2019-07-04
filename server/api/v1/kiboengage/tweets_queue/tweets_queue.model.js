const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tweetsQueueSchema = new Schema({
    autopostingId: {type: Schema.ObjectId, ref: 'autopostings'},
    tweet: {type: Schema.Types.Mixed},
    expiryTime: { type: Date, default: Date.now }
})


exports.tweets_queue = mongoose.model('tweets_queue', tweetsQueueSchema)