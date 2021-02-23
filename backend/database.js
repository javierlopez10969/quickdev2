const mongoose = require("mongoose");
//const config = require("./config");
//const MONGODB_URI = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

//Conectarse a la base de datos
//.connect(MONGODB_URI,{
mongoose
    .connect('mongodb://localhost/mevnhub', {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useFindAndModify: false,
        useCreateIndex: true,
    })
    //.then((db) => console.log("La base de datos ha sido conectada a :", db.connection.host))
    //.catch((err) => console.error(err))    ;

var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error al conectarse a la base de datos")
else
    console.log("Conectado a la base de datos <3")