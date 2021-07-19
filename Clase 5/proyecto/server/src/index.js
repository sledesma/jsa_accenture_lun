// Requerimos librerías necesarias
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;

const server = express(); // Creamos el servidor

const httpClient = axios.create({ // Creamos la conexión con estadisticasbcra
	baseURL: "https://api.estadisticasbcra.com",
	headers: {
		Authorization:
			"BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTgyNTI1NTYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJzZWJhc3RpYW4ubGVkZXNtYTA4QGdtYWlsLmNvbSJ9.TR-qFIct-EbWAl392kgw_UI1lTW-F1r0i4_pbq_vQVAG7Z8ZIu0Z5fw7049MyqHMv4ZFsp-ggk6OktKGK9VWaA",
	},
});

const router = express.Router();

router.get("/usd/diaria/:fecha", function (req, res) {
	httpClient.get("/usd").then(function (respuesta) {
    const filtered = respuesta.data.find(function(val){
      return val.d == req.params.fecha
    })
		res.send(filtered);
	});
});

router.get("/usd/mensual/:periodo", function (req, res) {
	httpClient.get("/usd").then(function (respuesta) {
    const filtered = respuesta.data.filter(function(val){
			const fechaActual = {
				anio: val.d.split('-')[0], // ["2020", "02", "03"]
				mes: val.d.split('-')[1]
			}
			const fechaPeriodo = {
				anio: req.params.periodo.split('-')[0],
				mes: req.params.periodo.split('-')[1]
			}
      return fechaActual.anio == fechaPeriodo.anio && fechaActual.mes == fechaPeriodo.mes
    })
		res.send(filtered);
	});
})

router.get("/usd/mensual/:periodo/stats", function (req, res) {
	httpClient.get("/usd").then(function (respuesta) {
    const filtered = respuesta.data.filter(function(val){
			const fechaActual = {
				anio: val.d.split('-')[0], // ["2020", "02", "03"]
				mes: val.d.split('-')[1]
			}
			const fechaPeriodo = {
				anio: req.params.periodo.split('-')[0],
				mes: req.params.periodo.split('-')[1]
			}
      return fechaActual.anio == fechaPeriodo.anio && fechaActual.mes == fechaPeriodo.mes
    })

		const stats = {
			avg: 0,
			max: 0,
			min: 0
		};

		const auxSum = filtered.reduce(function(prev, curr){
			return prev + curr.v;
		}, 0);
		stats.avg = Math.floor(auxSum / filtered.length);

		stats.max = filtered.reduce(function(prev, curr){
			if(curr.v > prev)
				return curr.v;
			else
				return prev;
		}, Number.NEGATIVE_INFINITY);

		stats.min = filtered.reduce(function(prev, curr){
			if(curr.v < prev)
				return curr.v;
			else
				return prev;
		}, Number.POSITIVE_INFINITY);

		res.send(stats);
	});
})

router.post("/trading", function(req, res){
	console.log(req.body);
	res.send(req.body);
	// TODO
});



// server.use(rh) => AÑADE UN REQUEST-HANDLER
server.use(express.json()); // Obtiene el cuerpo de la peticion en req.body
server.use(cors()); // Habilitamos el hermoso cors
server.use(router);

server.listen(3005);
