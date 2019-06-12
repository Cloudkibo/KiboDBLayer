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
router.get('/normalizeAutopostingDate', controller.normalizeAutopostingDate)

module.exports = router
