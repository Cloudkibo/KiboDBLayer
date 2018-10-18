const express = require('express')
const router = express.Router()

const controller = require('./test.controller')

router.post('/', controller.index)

module.exports = router
