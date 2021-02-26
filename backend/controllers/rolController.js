// platformsController.js
// Import platform model
Rol = require('../models/Rol');


// Handle index actions
exports.index = function (req, res) {
    Rol.get(function (err, rols) {
    if (err) {
        res.json({
            status: "error",
            message: err,
            });
        }
        res.json({
            status: "success",
            message: "rols retrieved successfully",
            data: rols
        });
    });
};

// Handle create rols actions
exports.new = function (req, res) {
        var rol = new Rol();
        rol.name = req.body.name ? req.body.name : rol.name;
        rol.description = req.body.description;
        rol.permissions = req.body.permissions;

        // save the rol and check for errors
        rol.save(function (err) {
        if (err)
            res.json(err);
        
        res.json({
            message: 'New rol created!',
            data: rol
        });
    });
};


// Handle view rol info
exports.view = function (req, res) {
    Rol.findById(req.params.rol_id, function (err, rol) {
        if (err)
            res.send(err);
        res.json({
            message: 'Rol details loading..',
            data: rol
        });
    });
};

// Handle update rol info
exports.update = function (req, res) {
    Rol.findById(req.params.rol_id,
    function (err, rol) {
        if (err)
            res.send(err);
        rol.name = req.body.name ? req.body.name : rol.name;
        rol.description = req.body.description;
        rol.permissions = req.body.permissions;
        // save the rol and check for errors
        rol.save(function (err) {
            if (err)
            res.json(err);
        res.json({
        message: 'rol Info updated',
        data: rol
            });
        });
    });
};


// Handle delete rol
exports.delete = function (req, res) {
    Rol.remove({
        _id: req.params.rol_id
    }, function (err, rol) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'rol deleted'
        });
    });
};

/*

//Faker rol
Proyect.get('/faker-user',  (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
          userModel.create({
          name : faker.random.arrayElement(["rol1","rol2","rol3","rol4"]);,
          if (name == "rol1"){
              description : "descripcion rol1"
          }
          if (name == "rol2"){
              description : "descripcion rol2"
          },
          if (name == "rol3"){
              description : "descripcion rol3"
          },
          if (name == "rol4"){
              description : "descripcion rol4"
          },
      })
  }
  res.send('Creando 100 proyectos faker');
});

*/