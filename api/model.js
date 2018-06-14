const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define collection and schema
var User = new Schema({
  ddname: String,
  name: {
    type: String
  },
  age: {
    type: Number
  }
},{
    collection: 'users'
})

module.exports = mongoose.model('User', User)

