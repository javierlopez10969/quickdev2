// Table.js
// Modelo de tablon de anuncios
const mongoose = require('mongoose');
// Setup schema
const tableSchema = mongoose.Schema({
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
module.exports = mongoose.model('Table', tableSchema);