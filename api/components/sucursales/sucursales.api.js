const SucursalModel = require('./sucursales.model');

module.exports.registrar = (req, res) => {
  var newSucursal = new SucursalModel({
    id              :  req.body.id,
    nombre      :  req.body.nombre,
    provincia           :  req.body.provincia,
    canton           :  req.body.canton,
    distrito           :  req.body.distrito,
    telefono           :  req.body.telefono,
    horario           :  req.body.horario,
    latitud           : req.body.latitud,
    longitud          : req.body.longitud,
    estado           :  req.body.estado,
  });

  newSucursal.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de sucursales' + err});
    }else{
      res.json({success:true, msj:'Se registró la Sucursal correctamente'});
    }
  });
};

module.exports.get_all_sucursales = (req,res) => {
  SucursalModel.find().then((sucursales) => {
    res.send(sucursales);
  });
};

module.exports.actualizar_sucursal = (req,res) => {
  SucursalModel.update({id: req.body.id}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.buscar_sucursal_id = function(req, res){
  SucursalModel.findById({_id : req.body.id}).then(
      function(sucursal){
          res.send(sucursal);
      });
};



