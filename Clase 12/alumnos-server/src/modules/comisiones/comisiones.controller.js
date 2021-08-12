const comisiones = require("../../models/comisiones.model");
const alumnos = require("../../models/alumnos.model");

const controller = {};

// Mostrar todos los datos de todos los recursos
controller.getAll = async (req, res) => {
	const data = await comisiones.find({}).exec();
	res.send(data);
};

// Mostrar todos los datos de un recurso
controller.getOne = async (req, res) => {
	const data = await comisiones.findById(req.params.id).exec();
	res.send(data);
};

// Alta de un nuevo recurso
controller.create = async (req, res) => {
	const nuevaComision = new comisiones();

	nuevaComision.curso = req.body.curso;
	nuevaComision.division = req.body.division;
	nuevaComision.alumnos = [];

	await nuevaComision.save();

	res.send(nuevaComision);
};

controller.createAlumno = async (req, res) => {
	const comisionActual = await comisiones.findById(req.params.id).exec();

	const nuevoAlumno = new alumnos();

	nuevoAlumno.nombre = req.body.nombre;
	nuevoAlumno.apellido = req.body.apellido;
	nuevoAlumno.dni = req.body.dni;
	nuevoAlumno.comision = comisionActual._id;

	await nuevoAlumno.save();

	comisiones.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			$push: {
				alumnos: nuevoAlumno._id,
			},
		},
		function (err, data) {
			if (err) res.send(err);
			else res.send({ alumno_creado: nuevoAlumno, comision_actualizada: data });
		}
	);
};

// Modificacion de un recurso existente
controller.edit = async (req, res) => {
	comisionActual.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			$set: {
				curso: req.body.curso,
				division: req.body.division,
			},
		},
		function (err, data) {
			if (err) res.send(err);
			else res.send({ comision_actualizada: data });
		}
	);
};

// Eliminación de un recurso existente
controller.delete = async (req, res) => {
	const borrado = await comisiones.findByIdAndDelete(req.params.id).exec()

	await alumnos.deleteMany({
		_id: {
			$in: borrado.alumnos
		}
	});

	res.send({
		comision_borrada: borrado
	})
};

module.exports = controller;
