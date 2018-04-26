const ConvenioModel = require('./convenios.model');

module.exports.registrar = (req, res) => {
  var newConvenio = new ConvenioModel({
    nombreEntidad    :  req.body.nombreEntidad,
    tipoTramite      :  req.body.tipoTramite,
  });

  newConvenio.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de convenios' + err});
    }else{
      res.json({success:true, msj:'Se registró el convenio correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  ConvenioModel.find().then((convenios) => {
    res.send(convenios);
  });
};

module.exports.actualizar = (req,res) => {
  ConvenioModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, convenio) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};