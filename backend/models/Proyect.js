// Proyect.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Setup schema
let proyectSchema = mongoose.Schema({
    //Titulo del proyecto
    titulo: {type: String,required: true},
    //Cliente solicitante del proyecto : id
    cliente: {type: String},
    idCliente :{type : String},
    //Postulantes array con todos los id
    postulantes:{type: Array},
    //Etiquetas que uno le puede añadir a su proyecyo
    tags:{type:Array},
    //Especialista que se ha adjudicado el proyecto  
    especialista: {type: String},
    //Descripción del proyecto
    contenido: {type: String,required: true},
    requisito:{type: String},
    create_date: {type: Date,default: Date.now}
});

proyectSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });
// Export
module.exports = mongoose.model('Proyect', proyectSchema);