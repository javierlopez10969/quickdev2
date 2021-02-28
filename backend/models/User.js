// User.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
  values: ['ADMIN', 'USER' , 'Cliente','Especialista'],
  message: '{VALUE} no es un rol válido'
}

// Setup schema
let userSchema = mongoose.Schema({
    username:{type: String,required: [true, 'El rut es necesario']},
    name:{type: String,required: [true, 'El nombre es necesario'] },
    nameEmpresa:{type: String},
    email:{type: String,required: [true, 'La contraseña es necesaria'] },
    pass:{type: String, required: [true, 'Pass es necesario'] },
    especialidad: String,
    phone: String,
    role: { type: String, default: 'USER', enum: roles },
    activo: { type: Boolean, default: true },
    proyectosPostulados: {type: Array},
    idProyecto: String, 
    date: {type: Date,default: Date.now}
});

// Validator
userSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });
// Export
module.exports = mongoose.model('User', userSchema);