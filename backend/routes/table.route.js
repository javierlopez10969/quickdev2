const express = require('express');
const tableRoute = express.Router();
//Faker
const faker = require('faker');

// Modelo de Tabla
let tableModel = require('../models/table');

//GET para mostrar Tablas
tableRoute.route('/tables').get((req, res) => {
  tableModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
 tableRoute.route('/create-table').post((req, res, next) => {
    tableModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

tableRoute.route('/edit-table/:id').get((req, res) => {
   tableModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update table
tableRoute.route('/update-table/:id').post((req, res, next) => {
  tableModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('table successfully updated!')
    }
  })
})

// Delete table
tableRoute.route('/delete-table/:id').delete((req, res, next) => {
  tableModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

//Faker table
tableRoute.get('/faker-table', async (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
      await tableModel.create({
          name : faker.name.findName(),
          email: faker.internet.email(),
          gender: faker.name.gender() ,
          phone: faker.phone.phoneNumber()

      })
  }
  res.send('Creando 100 tables faker');
});


module.exports = tableRoute;
