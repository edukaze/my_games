const express = require('express')
const routes = require('./web')
const app = express()
const port = process.env.PORT || 3000

app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})