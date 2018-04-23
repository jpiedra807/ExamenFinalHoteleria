const LicenciaModel = require('./licencias.model');

module.exports.registrar = (req, res) => {
  var newLicencia = new LicenciasModel({
    numLicencia : req.body.numLicencia,
    tipoLicencia: req.body.tipoLicencia,
    vencimiento : req.body.vencimiento,
  });

  newLicencia.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de su licencia' + err});
    }else{
      res.json({success:true, msj:'Se registró la licencia correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  LicenciaModel.find().then((licencias) => {
    res.send(licencias);
  });
};

module.exports.actualizar = (req,res) => {
  LicenciaModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, licencias) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

// module.exports.agregar_estado = function (req, res) {
//   console.log('listaEstados  ' + req.body.listaEstados);

//   PaqueteModel.update({ _id: req.body._id }, { $push: { 'listaEstados': { estado: req.body.estado } } },
//       function (error) {
//           if (error) {
//               res.json({ success: false, msg: 'No se ha actualizado el usuario debido al siguiente error: ' + handleError(error) });
//           } else {
//               res.json({ success: true, msg: 'El usuario ha sido modificado con éxito' });
//           }

//       });

// }

// module.exports.buscar_paquete_por_id = function(req, res){
//   PaqueteModel.findById({_id : req.body.id}).then(
//       function(paquete){
//           res.send(paquete);
//       });
// };