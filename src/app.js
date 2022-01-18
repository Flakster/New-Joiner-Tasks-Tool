const express = require('express');
const app = express();
const config = require('./utils/config');

// Settings
app.set('port', config.PORT)


module.exports = app;