const express = require('express');
const controller = require('./comisiones.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.create);
router.post('/:id/alumno', controller.createAlumno);
router.put('/:id', controller.edit);
router.delete('/:id', controller.delete);

module.exports = router;