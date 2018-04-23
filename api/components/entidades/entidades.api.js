const EntidadModel = require('./entidades.model');

module.exports.registrar = (req, res) => {
  var newEntidad = new EntidadModel({
    nombre              :  req.body.nombre,
    cedulaJuridica      :  req.body.cedulaJuridica,
    convenios           :  req.body.convenios,
  });

  newEntidad.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de entidades' + err});
    }else{
      res.json({success:true, msj:'Se registró la entidad correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  EntidadModel.find().then((entidades) => {
    res.send(entidades);
  });
};

module.exports.actualizar = (req,res) => {
  EntidadModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, entidad) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.buscar_entidad_por_id = function(req, res){
  EntidadModel.findById({_id : req.body.id}).then(
      function(entidad){
          res.send(entidad);
      });
};

module.exports.agregar_convenio = function (req, res) {
  console.log('convenios  ' + req.body.convenios);

  EntidadModel.update({ _id: req.body._id }, { $push: { 'convenios': { tipoTramite: req.body.tipoTramite } } },
      function (error) {
          if (error) {
              res.json({ success: false, msg: 'No se ha actualizado el usuario debido al siguiente error: ' + handleError(error) });
          } else {
              res.json({ success: true, msg: 'El usuario ha sido modificado con éxito' });
          }

      });

}

