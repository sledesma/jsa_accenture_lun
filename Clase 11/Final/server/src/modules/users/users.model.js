const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String
});

module.exports = mongoose.model('users', usersSchema);