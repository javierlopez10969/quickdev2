const express = require('express');
const bodyParser = require('body-parser');
const userRoute = express.Router();
//Faker
const faker = require('faker');

// Modelo de usuario
const userModel = require('../models/User');

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

var BCRYPT_SALT_ROUNDS = 12;
//GET para mostrar usuarios
userRoute.route('/users').get((req, res) => {
  console.log('Usuarios')
  userModel.find((error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})

//Crear usuario en post 1

function encriptar(user, pass) {
  var crypto = require('crypto')
  // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
  var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
  return hmac
}

userRoute.route('/registrar').post((req, res , next) => {
    res.send('Api / registrar')
    console.log('Api / registrar')
    //Obtenemos los datos username y password
    var username = req.body.username
    var password = req.body.pass
    var existe = true
    //Encriptamos por medio de una función la contraseña 
    var passEncriptada = encriptar(username, password)
    //Buscamos si el usuario existe
    userModel.findOne({username:username},function(err, user){
       if(!user) {
         existe = false
         req.body.pass = passEncriptada;
       }
       else{
          exite = true
          console.log('')
          res.send('Ya existe un usuario con ese nombre')
       }
          
    })

    userModel.create(req.body, (error, data) => {  
      if (error ) {
        console.log("Ha ocurrido un error en el post")
        return next(error)
      } else if(!existe) {
        res.json(data)
      }
    })
  }
);

userRoute.post('/nuevo-usuario', async (req, res) => {

  const body = {
    nombre: req.body.nombre,
    email: req.body.email,
    role: req.body.role
  }
  //Encriptación de contraseña
  //body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {
    const userDB = await userModel.create(body);
    return res.json(userDB);
  }catch (error) {
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
