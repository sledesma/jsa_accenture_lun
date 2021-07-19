// Requerimos librerías necesarias
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;

const server = express();

const httpClient = axios.create({
	baseURL: "https://api.estadisticasbcra.com",
	headers: {
		Authorization:
			"BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTgyNTI1NTYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJzZWJhc3RpYW4ubGVkZXNtYTA4QGdtYWlsLmNvbSJ9.TR-qFIct-EbWAl392kgw_UI1lTW-F1r0i4_pbq_vQVAG7Z8ZIu0Z5fw7049MyqHMv4ZFsp-ggk6OktKGK9VWaA",
	},
});

const router = express.Router();

router.get("/diaria/:fecha", function (req, res) {
	httpClient.get("/usd").then(function (respuesta) {
    const filtered = respuesta.data.find(function(val){
      return val.d == req.params.fecha
    })
		res.send(filtered);
	});
});

// server.use(rh) => AÑADE UN REQUEST-HANDLER
server.use(cors()); // Habilitamos el hermoso cors
server.use(router);

server.listen(3000);
