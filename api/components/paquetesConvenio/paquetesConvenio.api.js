const PaqueteConvenioModel = require('./paquetesConvenio.model');

module.exports.registrar = (req, res) => {
  var newPaqueteConvenio = new PaqueteConvenioModel({
    tracking    :  req.body.tracking,
    cliente      :  req.body.cliente,
    convenio      :  req.body.convenio,
    fecha      :  req.body.fecha,
    estadoTraslado      :  req.body.estadoTraslado,
  });

  newPaqueteConvenio.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de paquete' + err});
    }else{
      res.json({success:true, msj:'Se registró el paquete correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  PaqueteConvenioModel.find().then((paquetesConvenio) => {
    res.send(paquetesConvenio);
  });
};

module.exports.actualizar = (req,res) => {
  PaqueteConvenioModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, paqueteConvenio) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};