const express = require("express");
const productRoutes = express.Router();
const isAdminMiddleware = require('../middlewares/user-privileges.middleware');
const ProductService = require("../services/product.service");

// TODO: Make validations for each method

// Get all products or a product by id
productRoutes.get('/productos/:id?', (req, res) => {
    const paramProductId = req.params.id;
    if(paramProductId){
        const product = ProductService.getProductById(paramProductId);
        return res.send(product);
    }

    const products = ProductService.getProducts();
    return res.send(products);
});

// Add product to list
productRoutes.post('/productos', isAdminMiddleware, (req, res) => {
    const product = req.body.product;
    const products = ProductService.addProduct(product);
    return res.send(products);
});

// Update product by id
productRoutes.put('/productos/:id', isAdminMiddleware, (req, res) => {
    const productId = req.params.id;
    const newProductData = req.body.product;
    const productUpdated = ProductService.updateProduct(productId, newProductData);
    return res.send(productUpdated);
});

// Delete product by id
productRoutes.delete('/productos/:id', isAdminMiddleware, (req, res) => {
    const productId = req.params.id;
    const products = ProductService.deleteProductById(productId);

    return res.send(products);
});

module.exports = productRoutes;