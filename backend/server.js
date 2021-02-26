const express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  //Database
  database = require('./database'),
  bodyParser = require('body-parser');

//express
const app = express();

//RUTAS
const studentAPI = require('../backend/routes/student.route');
const userAPI = require('../backend/routes/user.route');
const pruebaAPI = require('../backend/routes/api.route');
const proyectAPI = require('../backend/routes/proyect.route');
//const permissionAPI = require('../backend/routes/permission.route');
//const platformAPI = require('../backend/routes/platform.route');
//const rolAPI = require('../backend/routes/rol.route');
//const tableAPI = require('../backend/routes/table.route');


//Configuracion bodyParser
app.use(bodyParser.urlencoded({
  extended:true
}));app.use(bodyParser.json());

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
*/
// Cors
app.use(cors());

// API
app.use('/api', studentAPI)
app.use('/api', userAPI)
app.use('/api', proyectAPI)
//app.use('/api', permissionAPI)
//app.use('/api', platformAPI)
//app.use('/api', rolAPI)
//app.use('/api', proyetableAPIctAPI)
//Prueba 
//app.use('/api2', pruebaAPI)
//app.use('/faker', fakers)

// Create port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

//Mensaje de inicio
app.get('/', (req, res) => res.send('Hello World with Express')); 

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
