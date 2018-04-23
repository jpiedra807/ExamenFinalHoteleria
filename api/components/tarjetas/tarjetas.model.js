//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var TarjetaSchema = new mongoose.Schema({
  id : {type : String, required : true},
  nombre : {type : String, required : true},
  numero : {type : String, required : true},
  expiracion : {type : String, required : true},
  cvv : {type : String, required : true},
  estado : {type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Tarjetas', TarjetaSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural