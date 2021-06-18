const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = 3001
const app = express()

// Cors
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

// Middleware for parsing
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// logger
app.use(logger('dev'))

app.put('/request', async (req, res) => {
  console.log(req.query)
  const { string, integer, timestamp } = req.body
  if (string, integer, timestamp) {
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}...`)
})
