const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const orderController = require('../controllers/order')

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/limited', shopController.limitProducts)

router.post('/cart', shopController.postCart);

router.delete('/cart-delete-item/:productId', shopController.postCartDeleteProduct);

router.post('/create-order', orderController.createOrder);

router.get('/orders', orderController.showOrder);


module.exports = router;
