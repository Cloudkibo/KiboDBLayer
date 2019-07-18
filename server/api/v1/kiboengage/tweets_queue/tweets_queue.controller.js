const Datalayer = require('./tweets_queue.datalayer')
const { sendSuccessResponse, sendErrorResponse } = require('../../global/response')

exports.index = function (req, res) {
    Datalayer.findAllQueueObjects()
    .then(foundObj => {
        sendSuccessResponse(res, 200, foundObj)
    })
    .catch(err => {
        sendErrorResponse(res, 500, err)
    })
}

exports.create = function (req,res) {
    console.log(req.body)
    Datalayer.createOneQueueObject(req.body)
    .then(resp => {
        sendSuccessResponse(res, 200, resp)
    })
    .catch(err => {
        sendErrorResponse(res, 500, err)
    })
}

exports.delete = function(req, res) {
    Datalayer.deleteQueue(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      sendErrorResponse(res, 500, err)
    })
}

exports.query = function (req, res) {
    Datalayer.findQueueUsingQuery(req.body)
    .then(foundRes => {
        sendSuccessResponse(res, 200, foundRes)
    })
    .catch(err => {
        sendErrorResponse(res, 500, err)
    })
}

exports.update = function (req, res) {
    Datalayer.updateQueue(req.body)
    .then(updatedPayload => {
        sendSuccessResponse(res, 200, updatedPayload)
    })
    .catch(err => {
        sendErrorResponse(res, 500, err)
    })
}
