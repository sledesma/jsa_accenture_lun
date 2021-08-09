const model = require('./alumnos.model');

const controller = {};

// Mostrar todos los datos de todos los recursos
controller.getAll = async (req, res) => {
  res.send(model.data);
}

// Mostrar todos los datos de un recurso
controller.getOne = async (req, res) => {
  const one = model.data.find((val) => val.id == req.params.id)
  res.send(one);
}

// Alta de un nuevo recurso
controller.create = async (req, res) => {
  model.data.push(req.body);
  res.status(201).send(req.body);
}

// Modificacion de un recurso existente
controller.edit = async (req, res) => {
  const aEditar = model.data.find((val) => val.id == req.params.id)

  for (const prop in req.body) {
    aEditar[prop] = req.body[prop];
  }

  model.data = model.data.map(item => {
    if(item.id == req.params.id)
      return aEditar
    else
      return item;
  });

  res.send(aEditar);
}

// Eliminación de un recurso existente
controller.delete = async (req, res) => {
  model.data = model.data.filter(item => item.id != req.params.id)
  res.send({
    deletedId: req.params.id
  })
}

module.exports = controller;