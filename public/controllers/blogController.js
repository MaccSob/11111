const express = require('express');
const controller = require('../controllers/blogController');
const auth = require('../middlewares/auth');

const blogRouter = express.Router();

blogRouter.use(auth.authenticateUser); // Requires authentication for all routes

blogRouter.post('/create', controller.createBlog);