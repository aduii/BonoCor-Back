const express = require('express');
const countryRouter = require('../modules/country/country.route');
const authRouter = require('../modules/auth/auth.route');
const bondRouter = require('../modules/bond/bond.route');

const apiRouter = express.Router();

apiRouter.use('/country', countryRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/bond', bondRouter);

module.exports = apiRouter;
