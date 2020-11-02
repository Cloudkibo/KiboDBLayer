let config = require('../../../config/environment')

exports.sendErrorToSentry = function (errObj, codePart, pageId, userId, companyId) {
  // if (config.env === 'production' || config.env === 'staging') {
    const Raven = require('raven')
    try {
      throw new Error(errObj.message)
    } catch (e) {
      console.log('in catch sentry', codePart)
      Raven.captureException(e, {
        extra: {codePart: codePart, pageId: pageId, userId: userId, companyId: companyId}, // Any other data you'd specify with setContext
        level: 'error' // Event level
      })
    }
  // }
}
