const express = require('express');
const permissionRoute = express.Router();
//Faker
const faker = require('faker');

// Modelo de permission
let permissionModel = require('../models/permission');

//GET para mostrar permisos
permissionRoute.route('/permissions').get((req, res) => {
  permissionModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
 permissionRoute.route('/create-permission').post((req, res, next) => {
    permissionModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

permissionRoute.route('/edit-permission/:id').get((req, res) => {
   permissionModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update permission
permissionRoute.route('/update-permission/:id').post((req, res, next) => {
  permissionModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('permission successfully updated!')
    }
  })
})

// Delete permission
permissionRoute.route('/delete-permission/:id').delete((req, res, next) => {
  permissionModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

//Faker permission
permissionRoute.get('/faker-permission', async (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
      await permissionModel.create({
          name : faker.name.findName(),
          email: faker.internet.email(),
          gender: faker.name.gender() ,
          phone: faker.phone.phoneNumber()

      })
  }
  res.send('Creando 100 permission faker');
});


module.exports = permissionRoute;
