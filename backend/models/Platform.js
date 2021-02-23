// Platform.js
const mongoose = require('mongoose');
// Setup schema
let plarformSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Platform', plarformSchema)