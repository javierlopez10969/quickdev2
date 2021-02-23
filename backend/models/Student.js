// Student.js
const mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)