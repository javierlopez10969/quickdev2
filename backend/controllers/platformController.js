// platformsController.js
// Import platform model
Platform = require('../models/Platform');


// Handle index actions
exports.index = function (req, res) {
    Platform.get(function (err, platforms) {
    if (err) {
        res.json({
            status: "error",
            message: err,
            });
        }
        res.json({
            status: "success",
            message: "platforms retrieved successfully",
            data: platforms
        });
    });
};

// Handle create platforms actions
exports.new = function (req, res) {
        var platform = new Platform();
        platform.name = req.body.name ? req.body.name : platform.name;
        platform.description = req.body.description;

        // save the platform and check for errors
        platform.save(function (err) {
        if (err)
            res.json(err);
        
        res.json({
            message: 'New platform created!',
            data: platform
        });
    });
};


// Handle view platform info
exports.view = function (req, res) {
    Platform.findById(req.params.platform_id, function (err, platform) {
        if (err)
            res.send(err);
        res.json({
            message: 'platforms details loading..',
            data: platform
        });
    });
};






// Handle update platform info
exports.update = function (req, res) {
    Platform.findById(req.params.platform_id,
    function (err, platform) {
        if (err)
            res.send(err);
        platform.name = req.body.name ? req.body.name : platform.name;
        platform.gender = req.body.gender;
        platform.email = req.body.email;
        platform.phone = req.body.phone;
    
        // save the platform and check for errors
        platform.save(function (err) {
            if (err)
            res.json(err);
        res.json({
        message: 'platform Info updated',
        data: platform
            });
        });
    });
};


// Handle delete platform
exports.delete = function (req, res) {
    Platform.remove({
        _id: req.params.platform_id
    }, function (err, platform) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'platform deleted'
        });
    });
};


/*

//Faker platform
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