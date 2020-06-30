const express = require('express');
const countryController = require('./country.controller');

const countryRouter = express.Router();
countryRouter.get('/all', countryController.getCountries);

module.exports = countryRouter;
