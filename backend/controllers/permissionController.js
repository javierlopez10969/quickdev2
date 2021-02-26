// Table controller.js
// Import table model
Permission = require('../models/Permission');

// Handle index actions
exports.index = function (req, res) {
    Permission.get(function(err, permissions){
       if (err){
            res.json({
               status: "error",
               message: err,
            });
        }
        res.json({
            status: "success",
            message: "permissions retrieved successfully",
            data: permissions
        });
    }); 
};
    
// Handle create permission actions
exports.new = function (req, res) {
    var permission = new Permission();
    permission.name = req.body.name ? req.body.name : permission.name;
    permission.description = req.body.description ;

    // save the permission and check for errors
    permission.save(function (err) {
    if (err)
        res.json(err);
    
    res.json({
        message: 'New permission created!',
        data: permission
    });
});
};


// Handle view permission info
exports.view = function (req, res) {
    Permission.findById(req.params.permission_id, function (err, permission) {
    if (err)
        res.send(err);
    res.json({
        message: 'permission details loading..',
        data: permission
    });
});
};

// Handle update permission info
exports.update = function (req, res) {
    Permission.findById(req.params.permission_id,
function (err, permission) {
    if (err)
        res.send(err);
    permission.name = req.body.name ? req.body.name : permission.name;
    permission.description = req.body.description;

    // save the permission and check for errors
    permission.save(function (err) {
        if (err)
        res.json(err);
    res.json({
    message: 'permission Info updated',
    data: permission
        });
    });
});
};


// Handle delete permission
exports.delete = function (req, res) {
Permission.remove({
    _id: req.params.permission_id
}, function (err, permission) {
    if (err)
        res.send(err);
    res.json({
        status: "success",
        message: 'permission deleted'
    });
});
};