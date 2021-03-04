const express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  //Database
  database = require('./database'),
  bodyParser = require('body-parser');

//express
const app = express();

//RUTAS
const userAPI = require('../backend/routes/user.route');
const proyectAPI = require('../backend/routes/proyect.route');

//Configuracion bodyParser
app.use(bodyParser.urlencoded({
  extended:true
}));app.use(bodyParser.json());

app.use(cors());

// API
app.use('/api', userAPI)
app.use('/api', proyectAPI)

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
