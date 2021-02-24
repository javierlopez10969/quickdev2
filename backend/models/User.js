// User.js
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol válido'
}

// Setup schema
let userSchema = mongoose.Schema({
    name:{type: String,required: [true, 'El nombre es necesario'] },
    email:{type: String,required: [true, 'La contraseña es necesaria'] },
    pass:{type: String, required: [true, 'Pass es necesario'] },
    gender: String,
    phone: String,
    role: { type: String, default: 'USER', enum: roles },
    activo: { type: Boolean, default: true },
    date: {type: Date,default: Date.now}
});

// Validator
userSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

module.exports = mongoose.model('User', userSchema);
