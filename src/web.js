const express = require('express')
const routes = express.Router()

const UserRoute = require('./routes/UserRoute')

const routeslist = {
    UserRoute
}

for (const route in routeslist) {
    console.log(routeslist[route])
    routes.use(routeslist[route])
}

module.exports = routes