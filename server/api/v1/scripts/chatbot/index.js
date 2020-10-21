const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/normalizeTriggers', controller.normalizeTriggers)
router.post('/normalizeStartingBlockIds', controller.normalizeStartingBlockIds)
router.get('/updateTypeOfChatbotsToManual', controller.updateTypeOfChatbotsToManual)
router.get('/normalizeParentBlockTitle', controller.normalizeParentBlockTitle)

module.exports = router
