const express = require("express");
const productRoutes = express.Router();
const isAdminMiddleware = require('../middlewares/user-privileges.middleware');
const ProductService = require("../services/product.service");

// TODO: Make validations for each method

productRoutes.get('/productos/:id?', (req, res) => {
    const paramProductId = req.params.id;
    if(paramProductId){
        const product = ProductService.getProductById(paramProductId);
        return res.send(product);
    }

    const products = ProductService.getProducts();
    return res.send(products);
});

productRoutes.post('/productos', isAdminMiddleware, (req, res) => {
    const product = req.body.product;
    const products = ProductService.addProduct(product);
    return res.send(products);
});

productRoutes.put('/productos/:id', isAdminMiddleware, (req, res) => {
    const productId = req.params.id;
    const newProductData = req.body.product;
    const productUpdated = ProductService.updateProduct(productId, newProductData);
    return res.send(productUpdated);
});

productRoutes.delete('/productos/:id', isAdminMiddleware, (req, res) => {
    const productId = req.params.id;
    const products = ProductService.deleteProductById(productId);

    return res.send(products);
});

module.exports = productRoutes;