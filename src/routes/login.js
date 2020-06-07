const express = require('express');
const controller = require('../controllers/login');
const routes = express.Router();

routes.post('/', controller.index);

module.exports = routes;