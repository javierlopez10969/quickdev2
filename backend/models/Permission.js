// Permission.js
const mongoose = require('mongoose');
// Setup schema
// En esta seccion van los atributos
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
var Permission = module.exports = mongoose.model('permission',permissionSchema);
    module.exports.get = function (callback, limit) {
    Permission.find(callback).limit(limit);
}