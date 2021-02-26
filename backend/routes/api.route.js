
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

// Import Cada controlador
var contactController = require('../controllers/contactController');
var tableController = require('../controllers/tableController');
var rolController = require('../controllers/rolController');
var proyectController = require('../controllers/proyectController');
var platformController = require('../controllers/platformController');
var permissionController = require('../controllers/permissionController');


// Contact routes
//Ejemmplo
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


// Rutas de tabla
router.route('/tables')
    .get(tableController.index);
router.route('/tables/create') 
    .post(tableController.new);
router.route('/tables/:table_id')
    .get(tableController.view)
    .patch(tableController.update)
    .put(tableController.update);
router.route('/tables/delete/:table_id') 
    .delete(tableController.delete);
router.route('/tables/faker-table') 
    .post(tableController.new);


// Rutas de Rol
router.route('/rols')
    .get(rolController.index);
router.route('/rols/create') 
    .post(rolController.new);
router.route('/rols/:rol_id')
    .get(rolController.view)
    .patch(rolController.update)
    .put(rolController.update);
router.route('/rols/delete/:rol_id') 
    .delete(rolController.delete);

// Rutas de proyects
router.route('/proyects')
    .get(proyectController.index);
router.route('/proyects/create') 
    .post(proyectController.new);
router.route('/proyects/:proyect_id')
    .get(proyectController.view)
    .patch(proyectController.update)
    .put(proyectController.update);
router.route('/proyects/delete/:proyect_id') 
    .delete(proyectController.delete);

// Rutas de platforms
router.route('/platforms')
    .get(platformController.index);
router.route('/platforms/create') 
    .post(platformController.new);
router.route('/platforms/:platform_id')
    .get(platformController.view)
    .patch(platformController.update)
    .put(platformController.update);
router.route('/platforms/delete/:platform_id') 
    .delete(platformController.delete);

// Rutas de permissions
router.route('/permissions')
    .get(permissionController.index);
router.route('/permissions/create') 
    .post(permissionController.new);
router.route('/permissions/:permission_id')
    .get(permissionController.view)
    .patch(permissionController.update)
    .put(permissionController.update);
router.route('/permissions/delete/:permission_id') 
    .delete(permissionController.delete);


// Export API routes
module.exports = router;