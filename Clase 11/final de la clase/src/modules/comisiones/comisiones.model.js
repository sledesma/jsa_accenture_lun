const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  curso: Number,
  division: Number,
  alumnos: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'alumnos' }
  ]
});

module.exports = mongoose.model('comisiones', schema);