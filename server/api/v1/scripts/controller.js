const NotificationsModel = require('../kibochat/notifications/notifications.model')
const TAG = '/api/v1/scripts/controller.js'

exports.normalizeKiboChat = function (req, res) {
  console.log(TAG, `normalizeKiboChat endpoint is hit:`)
  res.status(200).json({status: 'success'})
  NotificationsModel.find({agentId: {$type: 7}, companyId: {$type: 7}})
    .forEach(notification => {
      /* eslint-disable */
      notification.agentId = new String(notification.agentId)
      notification.companyId = new String(notification.companyId)
      /* eslint-enable */
      NotificationsModel.save(notification)
    })
}
