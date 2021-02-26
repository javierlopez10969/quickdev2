
// Table controller.js
// Import table model
Table = require('../models/Table');

// Handle index actions
exports.index = function (req, res) {
    Table.get(function(err, tables){
       if (err){
            res.json({
               status: "error",
               message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tables retrieved successfully",
            data: tables
        });
    }); 
};
    
// Handle create table actions
exports.new = function (req, res) {
    var table = new Table();
    table.name = req.body.name ? req.body.name : table.name;
    table.description = req.body.description ;

    // save the table and check for errors
    table.save(function (err) {
    if (err)
        res.json(err);
    
    res.json({
        message: 'New table created!',
        data: table
    });
});
};


// Handle view table info
exports.view = function (req, res) {
    Table.findById(req.params.table_id, function (err, table) {
    if (err)
        res.send(err);
    res.json({
        message: 'Table details loading..',
        data: table
    });
});
};

// Handle update table info
exports.update = function (req, res) {Table.findById(req.params.table_id,
function (err, table) {
    if (err)
        res.send(err);
    table.name = req.body.name ? req.body.name : table.name;
    table.description = req.body.description;

    // save the table and check for errors
    table.save(function (err) {
        if (err)
        res.json(err);
    res.json({
    message: 'table Info updated',
    data: table
        });
    });
});
};


// Handle delete table
exports.delete = function (req, res) {
Table.remove({
    _id: req.params.table_id
}, function (err, table) {
    if (err)
        res.send(err);
    res.json({
        status: "success",
        message: 'table deleted'
    });
});
};


  







