const alumnos = require('../../models/alumnos.model');
const comisiones = require('../../models/comisiones.model');

const controller = {};

// Mostrar todos los datos de todos los recursos -HECHO
controller.getAll = async (req, res) => {
  const datos = await alumnos.find({}).exec()
  res.send(datos);
}

// Mostrar todos los datos de un recurso
controller.getOne = async (req, res) => {
  const datos = await alumnos.findById(req.params.id)
  res.send(datos);
}

// Modificacion de un recurso existente
controller.edit = async (req, res) => {
 
  const actual = await alumnos.findById(req.params.id).exec()

  actual.nombre = req.body.nombre
  actual.apellido = req.body.apellido
  actual.dni = req.body.dni

  const resultado = await actual.save();

  res.send(resultado)
}

// Eliminación de un recurso existente
controller.delete = async (req, res) => {
  const alumno = await alumnos.findById(req.params.id);
  await alumnos.findByIdAndRemove(req.params.id);

  const comision = await comisiones.findById(alumno.comision);
  comision.alumnos.pull({ _id: alumno._id });
  await comision.save();

  res.send({
    alumno_borrado: alumno,
    comision_actualizada: comision
  });
}

module.exports = controller;