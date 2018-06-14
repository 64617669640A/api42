const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()
// db 
const config = require('./api/db')

// model
const User = require('./api/model')

// route
const UserRoute = require('./api/route')

// connect
mongoose.connect(config.DB).then(
  () => {console.log('data connected...')},
  err => { console.log('can connecte to the database'+err)
})

// bodyParser
app.use(bodyParser.json())
app.use('/user', UserRoute)

app.listen(4000, () => {
  console.log("server running...")
})

