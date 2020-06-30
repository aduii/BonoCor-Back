const express = require('express');
const bondController = require('./bond.controller');

const bondRouter = express.Router();

bondRouter.post('/create', bondController.createBond);

module.exports = bondRouter;
