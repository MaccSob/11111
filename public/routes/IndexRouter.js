const { Router } = require("express");
const controller = require('../controllers/userController');

const indexRouter = Router();

indexRouter.post('/signup', controller.createUser);
indexRouter.post('/login', controller.login);

module.exports = indexRouter;