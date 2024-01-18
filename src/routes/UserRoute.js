const express = require('express')
const routes = express.Router()

routes.get('/user', (req, res) => {
    res.send('neto e um usuaario')
})

module.exports = routes
