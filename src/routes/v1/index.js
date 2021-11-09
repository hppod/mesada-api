const express = require('express')
const router = express.Router()

router.use('/family', require('./family'))

module.exports = router