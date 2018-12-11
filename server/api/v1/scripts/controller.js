const NotificationsDataLayer = require('../kibochat/notifications/notifications.datalayer')
const TAG = '/api/v1/scripts/controller.js'

exports.normalizeKiboChat = function (req, res) {
  console.log(TAG, `normalizeKiboChat endpoint is hit:`)
  res.status(200).json({status: 'success'})
  NotificationsDataLayer.findAllNotificationObjects()
    .then(notifications => {
      notifications.forEach(notification => {
        /* eslint-disable */
        notification.agentId = new String(notification.agentId)
        notification.companyId = new String(notification.companyId)
        /* eslint-enable */
        notification.save((err, saved) => {
          if (err) console.log(TAG, `Failed to save notification ${err}`)
          else console.log(TAG, `Notification saved ${saved}`)
        })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize notifications data ${err}`)
    })
}
