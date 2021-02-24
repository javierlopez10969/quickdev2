const express = require('express');
const userRoute = express.Router();
//Faker
const faker = require('faker');

// Modelo de usuario
const userModel = require('../models/User');

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

//GET para mostrar usuarios
userRoute.route('/users').get((req, res) => {
  userModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})

//Crear usuario en post 1
 userRoute.route('/create-user').post((req, res, next) => {

    //body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
    userModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

userRoute.post('/nuevo-usuario', async (req, res) => {

  const body = {
    nombre: req.body.nombre,
    email: req.body.email,
    role: req.body.role
  }
  //Encriptación de contraseña
  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {
    const userDB = await userModel.create(body);
    return res.json(userDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});


userRoute.route('/edit-user/:id').get((req, res) => {
   userModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
userRoute.route('/update-user/:id').post((req, res, next) => {
  userModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('user successfully updated!')
    }
  })
})

// Delete user
userRoute.route('/delete-user/:id').delete((req, res, next) => {
  userModel.findByIdAndRemove(req.params.id, (error, data) => {
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
userRoute.get('/faker-user', async (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
      await userModel.create({
          name : faker.name.findName(),
          email: faker.internet.email(),
          gender: faker.name.gender() ,
          phone: faker.phone.phoneNumber()

      })
  }
  res.send('Creando 100 usuarios faker');
});


module.exports = userRoute;
