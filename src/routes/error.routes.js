const express = require("express");
const errorRoutes = express.Router();

errorRoutes.all('/*', (req, res) => {
    res.send({
        code: -2,
        descripcion: `ruta '${req.path}' método '${req.method}' no implementada.`
    });
});

module.exports = errorRoutes;