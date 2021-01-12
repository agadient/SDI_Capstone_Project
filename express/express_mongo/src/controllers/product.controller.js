const Product = require('../models/product.model');
const jwt_decode = require('jwt-decode');

//Simple version, without validation or sanitation
exports.product_create = function (req, res) {
  let product = new Product({
    sampleData: req.body.sampleData,
  });

  product.save(function (err) {
    if (err) {
      res.status(400).send();
      //console.log(err);
      return;
    }
    res.send("Product Created successfully");
  });
};

exports.product_all = function (req, res) {
  Product.find(({}), function (err, product) {
    if (err) return (err);
    res.send(product);
  });
};

exports.parseJWT = function (req, res) {
  let token = req.headers.authorization;
  const decoded = jwt_decode(token);
  res.send(decoded);
}