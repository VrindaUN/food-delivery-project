const express = require('express');
const orderController = require('../controllers/orderController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

// Routes
router.post('/', validationMiddleware.validateOrder, orderController.placeOrder);
router.get('/:id', orderController.getOrder);

module.exports = router;
