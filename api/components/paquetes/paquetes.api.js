const PaqueteModel = require('./paquetes.model');

module.exports.registrar = (req, res) => {
  var newPaquete = new PaqueteModel({
    usuario     : req.body.usuario,
    tracking    :  req.body.tracking,
    distribuidor    :  req.body.distribuidor,
    precio    :  req.body.precio,
    peso    :  req.body.peso,
    kilometro    :  req.body.kilometro,
    tipoArticulo    :  req.body.tipoArticulo,
    descripcion    :  req.body.descripcion,
    sucursal    :  req.body.sucursal,
    repartidor    :  req.body.repartidor,
    estado    :  req.body.estado,
    estadoTraslado    :  req.body.estadoTraslado,
    listaEstados    :  req.body.listaEstados,
  });

  newPaquete.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de paquete' + err});
    }else{
      res.json({success:true, msj:'Se registró el paquete correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  PaqueteModel.find().then((paquetes) => {
    res.send(paquetes);
  });
};

module.exports.actualizar = (req,res) => {
  PaqueteModel.update({tracking: req.body.tracking},req.body, (err, paquete) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};



module.exports.agregar_estado = function (req, res) {
  console.log('listaEstados  ' + req.body.listaEstados);

  PaqueteModel.update({ _id: req.body._id }, { $push: { 'listaEstados': { estado: req.body.estado } } },
      function (error) {
          if (error) {
              res.json({ success: false, msg: 'No se ha actualizado el usuario debido al siguiente error: ' + handleError(error) });
          } else {
              res.json({ success: true, msg: 'El usuario ha sido modificado con éxito' });
          }

      });

}

module.exports.buscar_paquete_por_id = function(req, res){
  PaqueteModel.findById({_id : req.body.id}).then(
      function(paquete){
          res.send(paquete);
      });
};

module.exports.agregar_articulo = function (req, res) {
  console.log('tipoArticulo  ' + req.body.tipoArticulo);

  PaqueteModel.update({ _id: req.body._id }, { $push: { 'tipoArticulo': { id: req.body.id } } },
      function (error) {
          if (error) {
              res.json({ success: false, msg: 'No se ha actualizado el usuario debido al siguiente error: ' + handleError(error) });
          } else {
              res.json({ success: true, msg: 'El usuario ha sido modificado con éxito' });
          }

      });

}