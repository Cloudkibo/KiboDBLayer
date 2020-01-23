const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/normalizeKiboChat', controller.normalizeKiboChat)
router.get('/normalizeKiboEngage', controller.normalizeKiboEngage)
router.get('/normalizeDataForDelivery', controller.normalizeDataForDelivery)
router.get('/normalizeChat', controller.normalizeChat)
router.get('/normalizeBroadcastUrls', controller.normalizeBroadcastUrls)
router.get('/normalizeTemplateUrls', controller.normalizeTemplateUrls)
router.get('/normalizeSequenceUrls', controller.normalizeSequenceUrls)
router.get('/broadcast_api/normalize/sentCount', controller.normalizeSentCount)
router.get('/autopost_tweets_to_fb/normalize/actionType', controller.normalizeActionType)
router.get('/filterAndModeration/normalizeData', controller.normalizeFilterAndModeration)
router.get('/normalizeAutopostingDate', controller.normalizeAutopostingDate)
router.get('/normalizeSequenceSubscribers', controller.normalizeSequenceSubscribers)
router.post('/normalizeClickCount', controller.normalizeClickCount)
router.post('/normalizeDataForBroadcast', controller.normalizeDataForBroadcast)

module.exports = router
