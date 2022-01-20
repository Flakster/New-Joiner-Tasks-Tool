const express = require('express');
const app = express();
const config = require('./utils/config');
const path = require('path');

// Settings
app.set('port', config.PORT)
app.use(express.static('public'))
app.use(express.json())

// Routes
app.get('/', (rec, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.use('/', require('./routes/api'))

module.exports = app;