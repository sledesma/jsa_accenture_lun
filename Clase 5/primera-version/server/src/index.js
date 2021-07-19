// Requerimos librerías necesarias
const express = require('express');

const server = express();

const router = express.Router();

router.get('/', function(req, res){
  res.send('Hola mundo desde express');
});

// server.use(rh) => AÑADE UN REQUEST-HANDLER

server.use(router);

server.listen(3000)