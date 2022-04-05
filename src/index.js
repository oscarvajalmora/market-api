const express = require('express');
const app = express()
const port = process.env.PORT || 8080;
const cartRoutes = require('./routes/cart.routes');
const productRoutes = require('./routes/product.routes');
const errorRoutes = require('./routes/error.routes');

// App config
app.use(express.json());

// Serve static files from /public folder
app.use(express.static('public'));

// Add routes to API
app.use('/api', [
    productRoutes,
    cartRoutes
]);

// Add routes for http error request
app.use(errorRoutes);

// Server app
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})