const express = require("express");

const cartRoutes = express.Router();

// Create a cart and return cart id
cartRoutes.post('/carrito', (req, res) => {
    res.send('Hello world!');
});

// Empty a cart and delete
cartRoutes.delete('/carrito/:id', (req, res) => {
    res.send('Hello world!');
});

// Get all associated products to a cart
cartRoutes.get('/carrito/:id/productos', (req, res) => {
    res.send(`Product id: ${req.params.id}`);
});

// Add products to cart by product id
cartRoutes.post('/carrito/:id:/productos', (req, res) => {
    res.send('Hello world!');
});

// Delete a product from a cart by product id and cart id
cartRoutes.put('/carrito/:id/productos/:id_prod', (req, res) => {
    res.send('Hello world!');
});

module.exports = cartRoutes;