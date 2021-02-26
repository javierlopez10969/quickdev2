// Proyect.js
const mongoose = require('mongoose');
// Setup schema
let proyectSchema = mongoose.Schema({
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
var Proyect = module.exports = mongoose.model('proyect',proyectSchema);
    module.exports.get = function (callback, limit) {
    Proyect.find(callback).limit(limit);
}