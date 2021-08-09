const jwt = require("jsonwebtoken");
const jwtConfig = require('../config/jwt');

module.exports = (req, res, next) => {
  const token =
    (req.body && req.body.token) || (req.query && req.query.token) || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Se requiere un token para autentificación");
  }

  try {
    console.log(token);
    const decoded = jwt.verify(token, jwtConfig.TOKEN_KEY);
    console.log(decoded);
    req.user = decoded;
    
  } catch (err) {
    console.log(err);
    return res.status(401).send("Token inválido");
  }
  return next();
};