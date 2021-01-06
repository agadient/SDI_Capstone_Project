const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.product_create = function (req, res) {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  product.save(function (err) {
    if (err) {
        console.log(err);
      return (err);
    }
    res.send("Product Created successfully");
  });
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return err;
    res.send(product);
  });
};

exports.product_all = function (req, res) {
  Product.find(({}), function (err, product) {
    if (err) return (err);
    res.send(product);
  });
};


