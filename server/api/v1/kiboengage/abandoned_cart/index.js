const express = require('express')
const router = express.Router()

router.use('/abandoned_checkout/', require('./abandoned_checkout'))
router.use('/cartinfo', require('./cartinfo'))
router.use('/checkoutinfo', require('./checkoutinfo'))
router.use('/storeanalytics', require('./storeanalytics'))
router.use('/storeinfo', require('./storeinfo'))

module.exports = router
