const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')
const cors = require('cors')

router.get('/', Controller.showIndex)

module.exports = router