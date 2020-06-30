const express = require('express');
const authController = require('./bond.controller');

const authRouter = express.Router();

bondRouter.post('/signup', bondController.createBond);


module.exports = authRouter;
