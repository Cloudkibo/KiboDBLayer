const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/normalizeKiboChat', controller.normalizeKiboChat)
router.get('/normalizeKiboEngage', controller.normalizeKiboEngage)

module.exports = router
