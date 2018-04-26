//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var SucursalSchema = new mongoose.Schema({
  id : {type : String, unique: true},
  nombre : {type : String},
  provincia : {type : String},
  canton : {type : String},
  distrito : {type : String},
  telefono : {type : String},
  horario: {type : String},
  latitud : {type: String},
  longitud: {type: String},
  estado : {type : String},
  
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Sucursal', SucursalSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural