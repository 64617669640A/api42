const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define collection and schema
var UserSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  }


},{
    collection: 'users'
})

module.exports = mongoose.model('User', UserSchema)

