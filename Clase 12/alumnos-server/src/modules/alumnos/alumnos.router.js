const express = require('express');
const controller = require('./alumnos.controller');

const router = express.Router();

router.get('/', controller.getAll);
// TODO - router.get('/:id', controller.getOne);
// TODO - router.put('/:id', controller.edit);
// TODO - router.delete('/:id', controller.delete);

module.exports = router;