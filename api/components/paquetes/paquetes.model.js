//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var PaqueteSchema = new mongoose.Schema({
    usuario     : {type : String, required : true},
    tracking    :  {type : String, required : true, unique: true},
    distribuidor    :  {type : String, required : true},
    precio    :  {type : String, required : true},
    peso    :  {type : String, required : true},
    kilometro    :  {type : String, required : true},
    tipoArticulo    :  [
    {
      id: {type: String}

    }],
    descripcion    :  {type : String, required : true},
    sucursal    :  {type : String, required : true},
    repartidor    :  {type : String},
    estado    :  {type : String, required : true},
    estadoTraslado    :  {type : String, required : true},
    listaEstados    :  [
    {
      tracking: {type: String}

    }]
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Paquete', PaqueteSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural