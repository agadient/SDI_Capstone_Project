const dataController = require('../controllers').data;

module.exports = (app) => {
 
  app.get('/readDB', dataController.list);
  app.post('/writeDB', dataController.create);
  app.get('/parseJWT', dataController.parse);
};