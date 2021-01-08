const express = require('express');
const router = express.Router();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// Creates a product based on the Product Shema.
router.get("/public", product_controller.product_all);
router.get("/user", product_controller.product_all);
router.get("/admin", product_controller.product_all);
router.get("/parseJWT", product_controller.parseJWT)
module.exports = router;