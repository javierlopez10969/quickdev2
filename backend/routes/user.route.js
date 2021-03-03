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


//RUTAS MAS CONTROLADOR
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
userRoute.route('/registrar').post((req, res , next) => {
    console.log('Api / registrar')
    const newUser = new userModel({
      name: req.body.name,
      nameEmpresa: req.body.nameEmpresa,
      email: req.body.email,
      username: req.body.username ,
      pass: bcrypt.hashSync(req.body.pass, 10),
      especialidad: req.body.especialidad,
      phone: req.body.phone,
      role : req.body.role,
      proyectosPostulados: [],
      idProyecto : '',
    })
    //Obtenemos los datos username y password
    const correo = req.body.email
    const password =  newUser.pass
    console.log('Pass original  :' + req.body.pass +'  Pass encriptada  :'+ password)
    var existe = true
    //Encriptamos por medio de una función la contraseña 
    //var passEncriptada = encriptar(username, password)
    //Buscamos si el usuario existe
    userModel.findOne({correo},function(err, user){
        if (!err){
          if(!user) {
            existe = false
            console.log('Usuario no existe')
          }
          else{
              exite = true;
              console.log('Usuario ya existe')
          }  
        }
        else{
          console.log('error findOne : '  + err.message);
        } 
    })

    userModel.create(newUser, (error, data) => {  
      if (error) {
        return next(error)
      }
      if(existe == false){
        console.log('usuario registrado' + data._id)
        res.json(data) 
      }else{
        return res.status(400).json({
          title: 'Usuario ya existe',
          error: 'Usuario ya existe'
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
        user
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
      console.log('user successfully updated!');
      console.log('Name user : ' + req.body.name+' New user id proyecto : ' + req.body.idProyecto  + ' id usuario' + req.body._id  )
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
userRoute.get('/faker-user',  (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
          userModel.create({
            name : faker.name.findName(),
            username : faker.name.findName(),
            nameEmpresa : faker.company.companyName(),
            pass : faker.internet.password(),
            email: faker.internet.email(),
            role : faker.random.arrayElement(['Cliente','Especialista']),
            especialidad: faker.name.jobTitle(),
            phone: faker.phone.phoneNumber(),
            idProyecto : ''
          })
  }
  res.send('Creando 100 usuarios faker');
});


module.exports = userRoute;
