const express = require('express');
const authController = require('./bond.controller');

const authRouter = express.Router();

bondRouter.post('/bond', bondController.createBond);
bondRouter.get('/bond', bondController.findBondByUserId);
bondRouter.get('/bond', bondController.findBondByBondId);

module.exports = bondRouter;