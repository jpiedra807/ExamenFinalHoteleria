//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var EntidadSchema = new mongoose.Schema({
  nombre : {type : String, required : true},
  cedulaJuridica : {type : String, required : true, unique: true},
  convenios: [
    {
      tipoTramite: {type: String}

    }]
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Entidades', EntidadSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural