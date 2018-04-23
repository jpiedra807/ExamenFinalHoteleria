//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var UserSchema = new mongoose.Schema({
  cedula : {type : String, required : true},
  foto : {type : String, required : true},
  primerNombre : {type : String, required : true},
  segundoNombre : {type : String},
  primerApellido : {type : String, required : true},
  segundoApellido : {type : String},
  correo : {type : String, required : true, unique: true},
  telefono : {type : String, required : true},
  fechaNacimiento : {type : Date, required : true},
  provincia : {type : String, required : true},
  canton : {type : String, required : true},
  distrito : {type : String, required : true},
  direccionExacta : {type : String, required : true},
  tipo : {type : String},
  listaPaquetes :  [
    {
      tracking: {type: String}

    }],
  sucursalAsignada : {type : String, required : true},
  puesto : {type : String},
  vehiculo : {type : String},
  listaLicencias : {type : Array, required : true},
  estado : {type : String, required : true},
  listaTarjetas : [
    {
      tarjetaID: {type: String}
    }],
  listaPaquetesConvenios : [
    {
      tracking: {type: String}

    }],
  contrasenna : {type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', UserSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural