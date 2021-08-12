const express = require('express');
const controller = require('./alumnos.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.put('/:id', controller.edit);
router.delete('/:id', controller.delete);

module.exports = router;