const express = require('express');
const platformRoute = express.Router();
//Faker
const faker = require('faker');

// Modelo de platform
let platformModel = require('../models/platform');

//GET para mostrar platforms
platformRoute.route('/platforms').get((req, res) => {
  platformModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
 platformRoute.route('/create-platform').post((req, res, next) => {
    platformModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

platformRoute.route('/edit-platform/:id').get((req, res) => {
   platformModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update platform
platformRoute.route('/update-platform/:id').post((req, res, next) => {
  platformModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('platform successfully updated!')
    }
  })
})

// Delete platform
platformRoute.route('/delete-platform/:id').delete((req, res, next) => {
  platformModel.findByIdAndRemove(req.params.id, (error, data) => {
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
platformRoute.get('/faker-platform', async (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
      await platformModel.create({
          name : faker.name.findName(),
          email: faker.internet.email(),
          gender: faker.name.gender() ,
          phone: faker.phone.phoneNumber()

      })
  }
  res.send('Creando 100 platforms faker');
});


module.exports = platformRoute;
