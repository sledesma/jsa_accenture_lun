const mongoose = require('mongoose');

const alumnosSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  dni: String
});

module.exports = mongoose.model('alumnos', alumnosSchema);