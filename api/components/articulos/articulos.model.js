//Requerimos mongoose
const mongoose = require ('mongoose');

//Esquema de usuarios
var ArticuloSchema = new mongoose.Schema ({
  id: {type: String, required: true},
  producto: {type: String, required: true},
  impuesto: {type: String, required: true},
  estado: {type: String, required: true},
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model ('Articulo', ArticuloSchema);
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
