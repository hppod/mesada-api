const express = require('express')
const router = express.Router()

router.post('', require('../../services/person/create'))

module.exports = router