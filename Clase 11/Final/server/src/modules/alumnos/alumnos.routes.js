const express = require("express");
const model = require("./alumnos.model");
const router = express.Router();

router.get("/", (req, res) => {
	model.find({}).exec((err, data) => {
		if (err) res.status(501).send("Error");
		else res.status(200).send(data);
	});
});

router.get("/:id", (req, res) => {
	model.findOne({
		_id: req.params.id,
	}).exec(function (err, data) {
		if (err)
			res.send("Error");
		else
			res.json(data);
	});
});

router.post("/", (req, res) => {
  var newData = new model();
	newData.name = req.body.name;
	newData.lastname = req.body.lastname;
	newData.dni = req.body.dni;
	newData.save(function (err, data) {
		if (err)
			res.send("Error");
		else
			res.send(data);
	});
});

router.put("/", (req, res) => {
  model.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			$set: {
				name: req.body.name,
				lastname: req.body.lastname,
				body: req.body.body,
			},
		},
		{
			upsert: true,
		},
		function (err, data) {
			if (err)
				res.send("Error");
			else
				res.send(data);
		}
	);
});

router.delete("/", (req, res) => {
  model.findByIdAndRemove(
		{
			_id: req.params.id,
		},
		function (err, data) {
			if (err) {
				res.send("Error");
			} else {
				res.send(data);
			}
		}
	);
});

module.exports = router;
