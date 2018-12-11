const NotificationsDataLayer = require('../kibochat/notifications/notifications.datalayer')
const TAG = '/api/v1/scripts/controller.js'

exports.normalizeKiboChat = function (req, res) {
  console.log(TAG, `normalizeKiboChat endpoint is hit:`)
  res.status(200).json({status: 'success'})
  NotificationsDataLayer.findNotificationUsingQuery({purpose: 'findAll', match: {agentId: {$type: 7}, companyId: {$type: 7}}})
    .then(notifications => {
      notifications.forEach(notification => {
        /* eslint-disable */
        notification.agentId = new String(notification.agentId)
        notification.companyId = new String(notification.companyId)
        /* eslint-enable */
        NotificationsDataLayer.deleteNotification({purpose: 'deleteOne', match: {_id: notification._id}})
          .then(deleted => {
            notification.save((err, saved) => {
              if (err) console.log(TAG, `Failed to save notification ${err}`)
            })
          })
          .catch(err => {
            console.log(TAG, `Failed to delete notification ${err}`)
          })
      })
    })
    .catch(err => {
      console.log(TAG, `Failed to normalize notifications data ${err}`)
    })
}
