const rolController = require('./controllers/rolController');
var faker = require('faker');

console.log("Faker en progreso");



for (let i = 0; i < 2 ; i++) {
    rolController.export.new({
    name : faker.random.arrayElement(["rol1","rol2","rol3","rol4"]),
    description : "descripcion rol1"
    /*if (name = "rol1"){
        description : "descripcion rol1"
    }
    if (name = "rol2"){
        description : "descripcion rol2"
    },
    if (name = "rol3"){
        description : "descripcion rol3"
    },
    if (name = "rol4"){
        description : "descripcion rol4"
    },*/
})
}

console.log('Creando 100 usuarios faker');