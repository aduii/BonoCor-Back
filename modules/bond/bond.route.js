const express = require('express');
const bondController = require('./bond.controller');

const bondRouter = express.Router();

bondRouter.post('/create', bondController.createBond);
bondRouter.get('/byUser/:userId', bondController.findBondByUserId);
bondRouter.get('/byId/:bondId', bondController.findBondByBondId);

module.exports = bondRouter;
