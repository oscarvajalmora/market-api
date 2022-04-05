const express = require('express');
const app = express()
const port = process.env.PORT || 8080;
const cartRoutes = require('./routes/cart.routes');
const productRoutes = require('./routes/product.routes');

// Add routes to API
app.use('/api', [
    productRoutes,
    cartRoutes
]);

// Server app
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})