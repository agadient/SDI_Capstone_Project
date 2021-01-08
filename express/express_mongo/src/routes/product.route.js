const express = require('express');
const router = express.Router();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// Creates a product based on the Product Shema.
router.get("/readDB", product_controller.product_all);
router.post("/writeDB", product_controller.product_create);
router.get("/parseJWT", product_controller.parseJWT);
module.exports = router;