const express = require('express')
const router = express.Router()

router.use('/family', require('./family'))
router.use('/person', require('./person'))

module.exports = router