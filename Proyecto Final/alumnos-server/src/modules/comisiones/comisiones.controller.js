const comisionesModel = require("../models/comisiones.model");
const alumnosModel = require("../models/alumnos.model");

const controller = {};

// Mostrar todos los datos de todos los recursos
controller.getAll = async (req, res) => {
	comisionesModel.find({}).exec(function (err, data) {
		if (err) res.status(501).send("Error");
		else res.send(data);
	});
};

// Mostrar todos los datos de un recurso
controller.getOne = async (req, res) => {
	comisionesModel.findOne({ _id: req.params.id }).exec(function (err, data) {
		if (err) res.status(501).send("Error");
		else res.send(data);
	});
};

// Alta de un nuevo recurso
controller.create = async (req, res) => {
	const nuevaComision = new comisionesModel();
	for (const prop in req.body) {
		nuevaComision[prop] = req.body[prop];
	}

	nuevaComision.save(function (err, respuesta) {
		if (err) res.status(501).send(err);
		else res.send(respuesta);
	});
};

controller.createAlumno = async (req, res) => {

	const alumnoModel = new alumnosModel();
	for (const prop in req.body) {
		alumnoModel[prop] = req.body[prop];
	}
	alumnoModel.comision = req.params.com;
	const nuevoAlumno = await alumnoModel.save();

	comisionesModel.findOneAndUpdate(
		{
			_id: req.params.com
		},
		{
			$push: {
				alumnos: nuevoAlumno._id
			}
		},
		{
			upsert: true
		},
		function (err, data) {
			if (err) res.send("Error");
			else res.send(nuevoAlumno);
		}
	);

};

// Modificacion de un recurso existente
controller.edit = async (req, res) => {
	comisionesModel.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			$set: {
				curso: req.body.curso,
				division: req.body.division
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

// DEBE BORRAR TAMBIEN TODOS LOS alumnosModel ASOCIADOS
// Eliminación de un recurso existente
controller.delete = async (req, res) => {
	comisionesModel.findByIdAndRemove(
		{
			_id: req.params.id,
		},
		function (err, data) {
			if (err) {
				res.send("Error");
			} else {
				alumnosModel.deleteMany({
					_id: {
						$in: data.alumnos
					}
				}, function(err) {
					if(err) {
						res.send("Error al borrar alumnos")
					} else {
						res.send({
							curso_id: req.params.id,
							alumnos: data.alumnos
						});
					}
				})

			}
		}
	);
};

module.exports = controller;
