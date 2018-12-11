const logger = require('../../../../components/logger')
const NotificationsDataLayer = require('../kibochat/notifications/notifications.datalayer')
const TAG = '/api/v1/scripts/controller.js'

exports.normalizeKiboChat = function (req, res) {
  logger.serverLog(TAG, `normalizeKiboChat endpoint is hit:`)
  res.status(200).json({status: 'success'})
  NotificationsDataLayer.findAllNotificationObjects()
    .then(notifications => {
      notifications.forEach(notification => {
        notification.agentId = notification.agentId.toString()
        notification.companyId = notification.companyId.toString()
      })
    })
    .catch(err => {
      logger.serverLog(TAG, `Failed to normalize notifications data ${err}`)
    })
}
