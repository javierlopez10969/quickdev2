// Permission.js
const mongoose = require('mongoose');
// Setup schema
const permissionSchema = mongoose.Schema({
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
module.exports = mongoose.model('Permission', permissionSchema);