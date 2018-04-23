const express = require('express'),
      router = express.Router(),
      paquetesConvenio = require('./paquetesConvenio.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_paquete_convenio')
  .post((req, res) => {
    paquetesConvenio.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_paquetes_convenio')
  .get((req, res) => {
    paquetesConvenio.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */
router.route('/update_paquete_convenio')
  .put((req, res) => {
    paquetesConvenio.actualizar(req,res);
});

module.exports = router;