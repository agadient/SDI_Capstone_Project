const dataController = require('../controllers').data;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the MYSQL API!',
  }));

  app.post('/api/data', dataController.create);
  app.get('/api/data', dataController.list);
};