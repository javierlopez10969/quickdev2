//Importaciones
const express = require('express');
const bodyParser = require('body-parser');
const fakerRoute = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Faker
const faker = require('faker');

// Importar modelos
//const userModel = require('../models/User');
const permissionModel = require('../models/Permission');
const tableModel = require('../models/Table');
const proyectModel = require('../models/Proyect');
const rolModel = require('../models/Rol');


//Faker permissions
const permissionfaker= fakerRoute.get('/permission', async (req, res) => {
  console.log("Ruta de fakers permissions");
  for (let i = 0; i < 2 ; i++) {
      await permissionModel.create({
          name : faker.name.findName(),
          description : faker.random.word(),
      })
  }
  res.send('Creando 2 permission faker');
});

/*
const permissionfaker2(){
  var array = [];
  for (let i = 0; i < 2 ; i++) {
    array.push({
        name : faker.name.findName(),
        description : faker.random.word(),
    })
  }
  return array
}
*/

//Faker Tables
fakerRoute.get('/table', async (req, res) => {
  console.log("Ruta de fakers table");
  for (let i = 0; i < 100 ; i++) {
      await tableModel.create({
          name : faker.name.findName(),
          description : faker.random.word(),
      })
  }
  res.send('Creando 100 tables faker');
});


//Faker Proyect
fakerRoute.get('/proyect', async (req, res) => {
  console.log("Ruta de fakers proyect");
  for (let i = 0; i < 100 ; i++) {
      await rolModel.create({
          name : faker.name.findName(),
          description : faker.random.word(),
      })
  }
  res.send('Creando 100 proyect faker');
});


//Faker Roles
fakerRoute.get('/rol', async (req, res) => {
  console.log("Ruta de fakers rol");
  for (let i = 0; i < 3 ; i++) {
      await proyectModel.create({
          name : faker.name.findName(),
          description : faker.random.word(),
          //permission: [{name: faker.name.findName(), decription: faker.random.word()}]
      })
  }
  res.send('Creando 3 proyect faker');
});




//Exportar
module.exports = fakerRoute;
