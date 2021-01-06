const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// Creates a product based on the Product Shema.
router.post("/create", product_controller.product_create);
router.get("/:id", product_controller.product_details);
router.get("", product_controller.product_all);
module.exports = router;