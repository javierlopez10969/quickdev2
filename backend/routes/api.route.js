

// Insertar luego de la siguiente línea
// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love! '
    });
});


// Import contact controller
var contactController = require('../controllers/contactController');

// Contact routes
router.route('/contacts')
    .get(contactController.index);

router.route('/contacts/create') 
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update);

router.route('/contacts/delete/:contact_id') 
    .delete(contactController.delete);

    // Export API routes
module.exports = router;