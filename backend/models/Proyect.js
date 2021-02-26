// Proyect.js
const mongoose = require('mongoose');
// Setup schema
let proyectSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    especialista: {
        type: String
    },
    requisito:{
        type: String
    },
    contenido: {
        type: String,
        required: true
    },

    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export rol model
var Proyect = module.exports = mongoose.model('proyect',proyectSchema);
    module.exports.get = function (callback, limit) {
    Proyect.find(callback).limit(limit);
}