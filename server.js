const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

// model
const User = require('./api/models/User')

// route
const router = require('./api/controllers/UserRoute')

// bodyParser
app.use(bodyParser.urlencoded({'extended': true}))
app.use(bodyParser.json())

// apply the route
app.use('/api', router)

// connect
mongoose.connect('mongodb://localhost:27017/api42').then(
  () => {console.log('data connected...')},
  err => { console.log('can connecte to the database'+err)
})

app.listen(4000, () => {
  console.log("server running...")
})
