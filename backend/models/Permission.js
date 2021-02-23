// Permission.js
const mongoose = require('mongoose');
// Setup schema
const rolSchema = mongoose.Schema({
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
var Permiso = module.exports = mongoose.model('Permission', userSchema);