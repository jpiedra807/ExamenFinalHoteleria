const express = require('express'),
      router = express.Router(),
      sucursales = require('./sucursales.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar sucursales dentro de la DB
 */
router.route('/save_sucursal')
  .post((req, res) => {
    sucursales.registrar(req,res);
});

/**
 * Función que obtiene todos las sucursales
 */
router.route('/get_all_sucursales')
  .get((req, res) => {
    sucursales.get_all_sucursales(req,res);
});

/**
 * Función que actualiza las sucursales
 */
router.route('/update_sucursales')
  .put((req, res) => {
    sucursales.actualizar_sucursal(req,res);
});

router.route('/buscar_sucursal_id')
    .post(function(req, res){
        sucursales.buscar_sucursal_id(req, res);
    });

module.exports = router;