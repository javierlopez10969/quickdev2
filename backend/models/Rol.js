// Rol.js
const mongoose = require('mongoose');
// Setup schema
let rolSchema = mongoose.Schema({
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
module.exports = mongoose.model('Rol', rolSchema);