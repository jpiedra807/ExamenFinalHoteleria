const express = require('express'),
      router = express.Router(),
      estados = require('./estados.api');

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
router.route('/save_estado')
  .post((req, res) => {
    estados.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_estados')
  .get((req, res) => {
    estados.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */
router.route('/update_estados')
  .put((req, res) => {
    estados.actualizar(req,res);
});

module.exports = router;