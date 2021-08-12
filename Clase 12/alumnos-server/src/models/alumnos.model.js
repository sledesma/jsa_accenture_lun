const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  dni: String,
  comision: { type: mongoose.Schema.Types.ObjectId, ref: 'comisiones' }
});

module.exports = mongoose.model('alumnos', schema);