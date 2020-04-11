const routes = require('express').Router();

const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');


//Definir routes
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req,res)=>{
  return res.status(200).send();
});
// routes.get('/dashboard', SessionController.store);
module.exports = routes;