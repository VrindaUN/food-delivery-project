const express = require('express');
const menuController = require('../controllers/menuController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

// Routes
router.post('/', validationMiddleware.validateMenuItem, menuController.addMenuItem);
router.get('/', menuController.getMenu);

module.exports = router;
