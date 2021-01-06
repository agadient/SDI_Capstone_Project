const DataExample = require('../models').DataExample;

module.exports = {
  create(req, res) {
    return DataExample
      .create({
        title: req.body.title,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
      return DataExample
      .findAll()
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  },
};