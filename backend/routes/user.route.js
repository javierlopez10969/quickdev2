//Importaciones
const express = require('express');
const bodyParser = require('body-parser');
const userRoute = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Faker
const faker = require('faker');

// Modelo de usuario
const userModel = require('../models/User');

// Hash Contraseña
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
/*
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
*/


userRoute.route('/registrar').post((req, res , next) => {
    console.log('Api / registrar')
    const newUser = new userModel({
      email: req.body.email,
      username: req.body.username ,
      name: req.body.name,
      pass: bcrypt.hashSync(req.body.pass, 10),
      gender: req.body.gender,
      phone: req.body.phone
    })
    //Obtenemos los datos username y password
    const correo = req.body.email
    const password =  newUser.pass
    console.log('Pass original  :' + req.body.pass +'  Pass encriptada  :'+ password)
    var existe = true
    //Encriptamos por medio de una función la contraseña 
    //var passEncriptada = encriptar(username, password)
    //Buscamos si el usuario existe
    userModel.findOne({email:req.body.email},function(err, user){
        if (!err) console.log("step2");
        else{
          console.log('error findOne : '  + err.message);
        } 
        if(!user) {
          existe = false
        }
        else{
            exite = true;
            console.log('Usuario ya existe')
        }  
    })

    userModel.create(newUser, (error, data) => {  
      if (error) {
        return next(error)
      } else {
        if(existe == false){
          res.json(data) 
        }
        return res.status(400).json({
          title: 'Usuario ya existe',
          error: ''
        })
      }
    })
  }
)

userRoute.route('/login').post((req, res, next) => {
  console.log('correo : ' + req.body.email)
  console.log('body req : ' + req.body.email + ' password :' +req.body.pass)
  userModel.findOne({ email: req.body.email }, (err, user) => {
    console.log('intentado loguear')
    if (err) {
      console.log('serve errror');
      return res.status(500).json({
      title: 'server error',
        error: err
      })
    }

    if (!user ) {
      console.log('usuario no encontrado');
      return res.status(401).json({
        title: 'user not found',
        error: 'invalid credentials'
      })
    }
    //incorrect password
    /*
    if (req.body.pass != user.pass) {
      console.log('wrong password');
      return res.status(401).json({
        title: 'login failed',
        error: 'invalid credentials'
      })
    }*/

    if (!bcrypt.compareSync(req.body.pass, user.pass)) {
      console.log('wrong password');
      return res.status(401).json({
        title: 'login failed',
        error: 'invalid credentials'
    })
    }
    //IF ALL IS GOOD create a token and send to frontend
    let token = jwt.sign({ userId: user._id}, 'secretkey');
    console.log('Login succes');
    return res.status(200).json({
      title: 'login sucess',
      token: token
    })
   
  })
})
//Obtener usuario grabbing user info
userRoute.route('/user').get((req, res, next) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })
    //token is valid
    userModel.findOne({ _id: decoded.userId }, (err, user) => {
      if (err) return console.log(err)
      return res.status(200).json({
        title: 'user grabbed',
        user: {
          email: user.email,
          name: user.name
        }
      })
    })

  })
})


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
