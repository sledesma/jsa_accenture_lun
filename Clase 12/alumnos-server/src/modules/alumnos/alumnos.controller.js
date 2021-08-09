const model = require('./alumnos.model');

const controller = {};

// Mostrar todos los datos de todos los recursos -HECHO
controller.getAll = async (req, res) => {
  model.find({}).exec(function(err, data){
    if(err)
      res.status(501).send("Error")
    else
      res.send(data);
  })
}

/*
// Mostrar todos los datos de un recurso
controller.getOne = async (req, res) => {
  const one = model.data.find((val) => val.id == req.params.id)
  res.send(one);
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
*/

module.exports = controller;