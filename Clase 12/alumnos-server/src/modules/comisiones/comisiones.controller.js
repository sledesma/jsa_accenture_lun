const model = require("./comisiones.model");
const alumnos = require("../alumnos/alumnos.model");

const controller = {};

// Mostrar todos los datos de todos los recursos
controller.getAll = async (req, res) => {
	model.find({}).exec(function (err, data) {
		if (err) res.status(501).send("Error");
		else res.send(data);
	});
};

// Mostrar todos los datos de un recurso
controller.getOne = async (req, res) => {
	model.findOne({ _id: req.params.com }).exec(function (err, data) {
		if (err) res.status(501).send("Error");
		else res.send(data);
	});
};

// Alta de un nuevo recurso
controller.create = async (req, res) => {
	const nuevaComision = new model();
	for (const prop in req.body) {
		nuevaComision[prop] = req.body[prop];
	}

	nuevaComision.save(function (err, respuesta) {
		if (err) res.status(501).send(err);
		else res.send(respuesta);
	});
};

controller.createAlumno = async (req, res) => {
	model.findOne({ _id: req.params.com }).exec(function (err, comision) {
		if (err) {
			res.status(501).send("Error");
			return;
		}

		const nuevoAlumno = new alumnos();
		for (const prop in req.body) {
			nuevoAlumno[prop] = req.body[prop];
		}

		nuevoAlumno.comision = comision._id;

		nuevoAlumno.save(function (err, respuesta) {
			if (err) res.status(501).send(err);
			else res.send(respuesta);
		});
	});
};
/*
// Modificacion de un recurso existente
controller.edit = async (req, res) => {
	const aEditar = model.data.find((val) => val.id == req.params.id);

	for (const prop in req.body) {
		aEditar[prop] = req.body[prop];
	}

	model.data = model.data.map((item) => {
		if (item.id == req.params.id) return aEditar;
		else return item;
	});

	res.send(aEditar);
};

// Eliminación de un recurso existente
controller.delete = async (req, res) => {
	model.data = model.data.filter((item) => item.id != req.params.id);
	res.send({
		deletedId: req.params.id,
	});
};
*/

module.exports = controller;
