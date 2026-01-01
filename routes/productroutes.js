const express = require('express');
const router = express.Router();

const validateApiKey = require('../middleware/validateApiKey');
const validateToken = require('../middleware/validateToken');
const productController = require('../controllers/productController');

// Public (API Key)
router.get('/public', validateApiKey, productController.getPublicProducts);

// Private (JWT)
router.post('/private', validateToken, productController.createProduct);

module.exports = router;
