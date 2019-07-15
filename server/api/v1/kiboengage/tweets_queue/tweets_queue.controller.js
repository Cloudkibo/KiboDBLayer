const Datalayer = require('./tweets_queue.datalayer')

exports.index = function (req, res) {
  Datalayer.findAllQueueObjects()
    .then(foundObj => {
      return res.status(200).json({status: 'success', payload: foundObj})
    })
    .catch(err => {
      return res.status(500).json({status: 'failed', payload: err})
    })
}

exports.create = function (req, res) {
  console.log(req.body)
  Datalayer.createOneQueueObject(req.body)
    .then(resp => {
      return res.status(200).json({status: 'success', payload: resp})
    })
    .catch(err => {
      return res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.delete = function (req, res) {
  Datalayer.deleteQueue(req.body)
    .then(result => {
      return res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      return res.status(500).json({status: 'failed', payload: err})
    })
}

exports.query = function (req, res) {
  Datalayer.findQueueUsingQuery(req.body)
    .then(foundRes => {
      return res.status(200).json({status: 'success', payload: foundRes})
    })
    .catch(err => {
      return res.status(500).json({status: 'failed', payload: err})
    })
}

exports.update = function (req, res) {
  Datalayer.updateQueue(req.body)
    .then(updatedPayload => {
      return res.status(200).json({status: 'success', payload: updatedPayload})
    })
    .catch(err => {
      return res.status(500).json({status: 'failed', payload: err})
    })
}
