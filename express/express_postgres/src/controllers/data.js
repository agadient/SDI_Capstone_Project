const DataExample = require('../models').DataExample;
const jwt_decode = require('jwt-decode');

module.exports = {
  create(req, res) {
    return DataExample.create({
      sampleData: req.body.sampleData,
    })
      .then((data) => res.status(201).send(data))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return DataExample.findAll()
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(400).send(error));
  },
  parse(req, res) {
    let token = req.headers.authorization;
    const decoded = jwt_decode(token);
    res.send(decoded);
  },
};