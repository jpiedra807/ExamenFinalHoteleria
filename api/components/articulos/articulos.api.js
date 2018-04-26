const ArticuloModel = require('./articulos.model');

module.exports.registrar = (req, res) => {
  var newArticulo = new ArticuloModel({
    id            :  req.body.id,
    producto      :  req.body.producto,
    impuesto      :  req.body.impuesto,
    estado        :  req.body.estado,
  });

  newArticulo.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de articulos' + err});
    }else{
      res.json({success:true, msj:'Se registró el articulo correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  ArticuloModel.find().then((articulos) => {
    res.send(articulos);
  });
};

module.exports.actualizar = (req,res) => {
  ArticuloModel.update({id:req.body.id},req.body, (err, articulo) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};