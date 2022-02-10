const express = require('express');
const mco2 = express();
const inputController = require('../controllers/inputController');


mco2.get('/', inputController.getHomePage);
mco2.post('/', inputController.getIsolationLevel);

module.exports = mco2;
