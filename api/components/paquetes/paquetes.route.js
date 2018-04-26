const express = require('express'),
      router = express.Router(),
      paquetes = require('./paquetes.api');

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
router.route('/save_paquete')
  .post((req, res) => {
    paquetes.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_paquetes')
  .get((req, res) => {
    paquetes.listarTodos(req,res);
});

router.route('/agregar_estado')
  .post(function (req, res) {
    paquetes.agregar_estado(req, res);
  });

  router.route('/buscar_paquete_id')
  .post(function (req, res) {
    users.buscar_paquete_por_id(req, res);
  });


/**
 * Función que actualiza los usuarios
 */
router.route('/update_paquete')
  .put((req, res) => {
    paquetes.actualizar(req,res);
});

module.exports = router;