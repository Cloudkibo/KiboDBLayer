const Raven = require('raven')

exports.sendAlert = function (message, path, data, otherInfo, level) {
  try {
    throw new Error(message)
  } catch (e) {
    Raven.context(() => {
      Raven.captureException(message, {
        extra: {path, data, otherInfo},
        level
      })
    })
  }
}
