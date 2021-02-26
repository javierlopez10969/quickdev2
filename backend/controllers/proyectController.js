// platformsController.js
// Import platform model
Proyect = require('../models/Proyect');


// Handle index actions
exports.index = function (req, res) {
    Proyect.get(function (err, proyects) {
    if (err) {
        res.json({
            status: "error",
            message: err,
            });
        }
        res.json({
            status: "success",
            message: "proyects retrieved successfully",
            data: proyects
        });
    });
};

// Handle create proyects actions
exports.new = function (req, res) {
        var proyect = new Proyect();
        proyect.name = req.body.name ? req.body.name : proyect.name;
        proyect.description = req.body.description;

        // save the proyect and check for errors
        proyect.save(function (err) {
        if (err)
            res.json(err);
        
        res.json({
            message: 'New proyect created!',
            data: proyect
        });
    });
};


// Handle view proyect info
exports.view = function (req, res) {
    Proyect.findById(req.params.proyect_id, function (err, proyect) {
        if (err)
            res.send(err);
        res.json({
            message: 'proyect details loading..',
            data: proyect
        });
    });
};

// Handle update proyect info
exports.update = function (req, res) {
    Proyect.findById(req.params.proyect_id,
    function (err, proyect) {
        if (err)
            res.send(err);
        proyect.name = req.body.name ? req.body.name : proyect.name;
        proyect.description = req.body.description;
        // save the proyect and check for errors
        proyect.save(function (err) {
            if (err)
            res.json(err);
        res.json({
        message: 'proyect Info updated',
        data: proyect
            });
        });
    });
};


// Handle delete proyect
exports.delete = function (req, res) {
    Proyect.remove({
        _id: req.params.proyect_id
    }, function (err, proyect) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'proyect deleted'
        });
    });
};

/*

exports.faker = function (req, res) {
    console.log("Ruta de fakers");
    for (let i = 0; i < 100 ; i++) {
            userModel.create({
            name : faker.name.findName(),
            description : faker.commerce.productDescription(),
        })
    }
  res.send('Creando 100 proyectos faker');
    , function (err, proyect) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'proyect deleted'
        });
    });
};

//Faker proyect
Proyect.get('/faker-user',  (req, res) => {
  console.log("Ruta de fakers");
  for (let i = 0; i < 100 ; i++) {
          userModel.create({
          name : faker.name.findName(),
          description : faker.commerce.productDescription(),
      })
  }
  res.send('Creando 100 proyectos faker');
});

*/