const comisionesModel = require("../models/comisiones.model");
const alumnosModel = require("../models/alumnos.model");
var ObjectId = require("mongoose").Types.ObjectId;

const controller = {};

// Mostrar todos los datos de todos los recursos
controller.getAll = async (req, res) => {
	const data = await alumnosModel.find({}).exec();
	res.send(data);
};

// Mostrar todos los datos de un recurso
controller.getOne = async (req, res) => {
	const data = await alumnosModel.findOne({ _id: req.params.id }).exec();
	res.send(data);
};

// Modificacion de un recurso existente
controller.edit = async (req, res) => {
	alumnosModel.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			$set: {
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				dni: req.body.dni,
			},
		},
		{
			upsert: true,
		},
		function (err, data) {
			if (err) res.send("Error");
			else res.send(data);
		}
	);
};

// SE DEBE BORRAR TAMBIEN DE LA COMISION EXISTENTE
// Eliminación de un recurso existente
controller.delete = async (req, res) => {
	const alumno = await alumnosModel.findById(req.params.id);
	await alumnosModel.findByIdAndRemove(req.params.id);

	const comision = await comisionesModel.findById(alumno.comision);
	comision.alumnos.pull({ _id: alumno._id });
	await comision.save();

	res.send({
		alumno_borrado: alumno,
		actualizacion_comision: comision,
	});
};

module.exports = controller;
