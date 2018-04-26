//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var ConvenioSchema = new mongoose.Schema({
  nombreEntidad : {type : String, required : true},
  tipoTramite : {type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Convenio', ConvenioSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural