const express = require('express');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json()); // Middleware for parsing JSON
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
