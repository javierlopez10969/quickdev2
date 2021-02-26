// Platform.js
const mongoose = require('mongoose');
// Setup schema
let plarformSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

// Export rol model
var Platform = module.exports = mongoose.model('platform',plarformSchema);
    module.exports.get = function (callback, limit) {
    Platform.find(callback).limit(limit);
}