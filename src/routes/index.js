const express = require('express')
const routes = express.Router()
const loadOperationsRoutes = require('./operations')



loadOperationsRoutes(routes)

module.exports = routes