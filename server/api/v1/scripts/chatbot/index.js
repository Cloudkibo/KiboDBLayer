const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/normalizeTriggers', controller.normalizeTriggers)

module.exports = router
