const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/normalizeTriggers', controller.normalizeTriggers)
router.post('/normalizeStartingBlockIds', controller.normalizeStartingBlockIds)

module.exports = router
