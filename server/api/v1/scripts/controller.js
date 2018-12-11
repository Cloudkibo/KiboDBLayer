const NotificationsDataLayer = require('../kibochat/notifications/notifications.datalayer')
const TAG = '/api/v1/scripts/controller.js'

exports.normalizeKiboChat = function (req, res) {
  console.log(TAG, `normalizeKiboChat endpoint is hit:`)
  res.status(200).json({status: 'success'})
  NotificationsDataLayer.findAllNotificationObjects()
    .then(notifications => {
      notifications.forEach(notification => {
        notification.agentId = notification.agentId.toString()
        notification.companyId = notification.companyId.toString()
        notification.save()
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize notifications data ${err}`)
    })
}
