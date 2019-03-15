const BroadcastModel = require('./smsBroadcasts.model')

exports.create = (payload) => {
  let obj = new BroadcastModel(payload)
  return obj.save()
}
