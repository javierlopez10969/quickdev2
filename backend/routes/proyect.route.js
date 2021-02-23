const express = require('express');
const proyectRoute = express.Router();
//Faker
const faker = require('faker');

// Modelo de usuario
let proyectModel = require('../models/Proyect');

//GET para mostrar Proyect
proyectRoute.route('/proyects').get((req, res) => {
  proyectModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
 proyectRoute.route('/create-proyect').post((req, res, next) => {
    proyectModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

proyectRoute.route('/edit-proyect/:id').get((req, res) => {
   proyectModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update proyect
proyectRoute.route('/update-proyect/:id').post((req, res, next) => {
  proyectModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('proyect successfully updated!')
    }
  })
})

// Delete proyect
proyectRoute.route('/delete-proyect/:id').delete((req, res, next) => {
  proyectModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

//Faker usuario
proyectRoute.get('/faker-proyect', async (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
      await proyectModel.create({
          name : faker.name.findName(),
          email: faker.internet.email(),
          gender: faker.name.gender() ,
          phone: faker.phone.phoneNumber()

      })
  }
  res.send('Creando 100 proyects faker');
});


module.exports = proyectRoute;
