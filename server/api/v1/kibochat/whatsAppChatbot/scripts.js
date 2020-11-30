const WhatsAppChatbotModel = require('./whatsAppChatbot.model')

exports.normalizeVerticals = function (req, res) {
  const query = {}
  const updated = { $set: { vertical: 'commerce' } }
  WhatsAppChatbotModel.updateMany(query, updated)
}
