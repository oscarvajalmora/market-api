const express = require("express");

const productRoutes = express.Router();

productRoutes.get('/productos/:id', (req, res) => {
    res.send(`Product id: ${req.params.id}`);
});

productRoutes.post('/productos', (req, res) => {
    res.send('Hello world!');
});

productRoutes.put('/productos/:id', (req, res) => {
    res.send('Hello world!');
});

productRoutes.delete('/productos/:id', (req, res) => {
    res.send('Hello world!');
});

module.exports = productRoutes;