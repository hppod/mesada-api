const express = require('express')
const router = express.Router()

router.post('', require('../../services/family/create'))

module.exports = router