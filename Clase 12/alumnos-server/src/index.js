const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const alumnosRouter = require("./modules/alumnos/alumnos.router");
const comisionesRouter = require("./modules/comisiones/comisiones.router");
const mongoConfigs = require("./configs/mongo");

const app = express();

app.set("puerto", process.env.PORT || 4001);

app.use(cors());
app.use(express.json()); // es el antiguo body-parser

app.use("/api/comisiones", comisionesRouter);
app.use("/api/alumnos", alumnosRouter);

mongoose
	.connect(mongoConfigs.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() =>
		app.listen(app.get("puerto"), () =>
			console.log(
				`Servidor ejecuntadose en http://localhost:${app.get("puerto")}`
			)
		)
	);
