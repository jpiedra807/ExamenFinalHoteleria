//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var PaqueteConvenioSchema = new mongoose.Schema({
  tracking : {type : String, required : true, unique:true},
  cliente : {type : String, required : true},
  convenio : {type : String, required : true},
  fecha : {type : Date, required : true},
  estadoTraslado : {type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('PaqueteConvenio', PaqueteConvenioSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural