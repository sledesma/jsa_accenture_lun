/**
 * CARACTERÍSTICAS
 * 
 * FUNCIONALES
 * > Crear, leer, actualizar y borrar Alumnos
 * 
 * NO FUNCIONALES
 * > Autentificación con JSON Web Tokens
 * > Conexión con base de datos MongoDB
 * 
 */
const express = require("express");
const mongoose = require('mongoose');

const authMiddleware = require("./middlewares/auth.middleware");

const usersRouter = require("./modules/users/users.routes");
const alumnosRouter = require("./modules/alumnos/alumnos.routes");

const mongoConfigs = require('./config/mongo');

const server = express();

// Configuraciones globales
server.set("puerto", process.env.PORT || 4001);
server.set("mongo_uri", mongoConfigs.MONGO_URI);

server.use("/api", authMiddleware);
server.use(express.json());

server.use("/users", usersRouter);
server.use("/api/alumnos", alumnosRouter);

server.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Página no encontrada",
    error: {
      statusCode: 404,
      message: "Página no encontrada",
    },
  });
});

mongoose.connect(server.get('mongo_uri'), { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    server.listen(server.get("puerto"), () =>
      console.log(
        `Servidor ejecutandose en http://localhost:${server.get("puerto")}`
      )
    );

  }
)

