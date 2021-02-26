// Rol.js

//import Permission from './Permission'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//const Permission = require('./Permission');
// Setup schema
// Si se necesita cambiar hay que modificar tanto el controlador como el modelo
let rolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    //permissions: [{type: Schema.Types.ObjectId, ref: 'permission', required:true}],
});


// Export rol model
var Rol = module.exports = mongoose.model('rol',rolSchema);
    module.exports.get = function (callback, limit) {
    Rol.find(callback).limit(limit);
}