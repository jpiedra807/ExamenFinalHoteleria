const EstadoModel = require('./estados.model');

module.exports.registrar = (req, res) => {
  var newEstado = new EstadoModel({
    usuario : req.body.usuario,
    fecha : req.body.fecha,
    hora : req.body.hora,
    estado : req.body.estado
  });

  newEstado.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de estado' + err});
    }else{
      res.json({success:true, msj:'Se registró el estado correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  EstadoModel.find().then((estados) => {
    res.send(estados);
  });
};

module.exports.actualizar = (req,res) => {
  EstadoModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, estado) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};