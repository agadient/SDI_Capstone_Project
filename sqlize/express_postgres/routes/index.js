const dataController = require('../controllers').data;

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the MYSQL API!",
    })
  );

  app.post('/writeDB', dataController.create);
  app.get('/readDB', dataController.list);
  app.get('/parseJWT', dataController.parse);

};