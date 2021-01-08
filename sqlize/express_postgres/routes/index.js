const dataController = require('../controllers').data;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the MYSQL API!',
  }));

   app.get("/public", dataController.list);
   app.get("/user", dataController.list);
   app.get("/admin", dataController.list);
   app.get("/parseJWT", dataController.parse);
};