const LogicLayer = require('./smsBroadcasts.logiclayer')
const MongoInterface = require('./interface_mongo')

exports.createOneBroadcastObject = (body) => {
  if (LogicLayer.validateCreatePayload(body)) return MongoInterface.create(body)
  else return new Promise((resolve, reject) => { reject(new Error('Payload is not valid')) })
}
