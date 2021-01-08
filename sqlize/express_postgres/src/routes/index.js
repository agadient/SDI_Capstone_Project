const dataController = require('../controllers').data;

module.exports = (app) => {

  app.post('/writeDB', dataController.create);
  app.get('/readDB', dataController.list);
  app.get('/parseJWT', dataController.parse);

};