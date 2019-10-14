const express = require('express');
const routes = express.Router();
const controllers = require('../controllers');



routes.get('/items', controllers.querySearch);
routes.get('/items/:id', controllers.getItemById);

module.exports = routes;