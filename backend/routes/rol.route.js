const express = require('express');
const rolRoute = express.Router();
//Faker
const faker = require('faker');

// Modelo de rol
let rolModel = require('../models/rol');

//GET para mostrar roles
rolRoute.route('/rols').get((req, res) => {
  rolModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
 rolRoute.route('/create-rol').post((req, res, next) => {
    rolModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

rolRoute.route('/edit-rol/:id').get((req, res) => {
   rolModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update rol
rolRoute.route('/update-rol/:id').post((req, res, next) => {
  rolModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('rol successfully updated!')
    }
  })
})

// Delete rol
rolRoute.route('/delete-rol/:id').delete((req, res, next) => {
  rolModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

//Faker rol
rolRoute.get('/faker-rol', async (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
      await rolModel.create({
          name : faker.name.findName(),
          email: faker.internet.email(),
          gender: faker.name.gender() ,
          phone: faker.phone.phoneNumber()

      })
  }
  res.send('Creando 100 roles faker');
});


module.exports = rolRoute;
