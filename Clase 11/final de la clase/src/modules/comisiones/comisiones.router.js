const express = require('express');
const controller = require('./comisiones.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.create);
router.post('/:com/alumno', controller.createAlumno);
// TODO - router.put('/:id', controller.edit);
// TODO - router.delete('/:id', controller.delete);

module.exports = router;