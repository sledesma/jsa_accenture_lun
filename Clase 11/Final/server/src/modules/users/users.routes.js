const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const jwtConfigs = require('../../config/jwt');

const model = require('./users.model');

const router = express.Router();

router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("Hay campos vacíos.");
    }

    const oldUser = await model.findOne({ username });

    if (oldUser) {
      return res.status(409).send("Usuario existente. Por favor, inicie sesión");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await model.create({
      username,
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: newUser._id, username },
      jwtConfigs.TOKEN_KEY,
      {
        expiresIn: jwtConfigs.TOKEN_DURATION,
      }
    );

    res.status(200).json({...newUser._doc, token});

  } catch (err) {
    console.log(err);
  }

});


router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("Todos los campos son necesarios");
      return;
    }
    const user = await model.findOne({ username });

    if(!user) {
      res.status(404).send('No existe el usuario. Por favor, registrese');
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (user && isValidPassword) {
      const token = jwt.sign(
        { user_id: user._id, username },
        jwtConfigs.TOKEN_KEY,
        {
          expiresIn: jwtConfigs.TOKEN_DURATION,
        }
      );

      res.status(200).json({...user._doc, token});
      return;
    }

    res.status(400).send("Credenciales invalidas");
  } catch (err) {
    res.status(501).send("Error al procesar la solicitud")
    console.log(err);
  }

});

module.exports = router;