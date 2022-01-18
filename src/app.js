const express = require('express');
const app = express();
const config = require('./utils/config');
const path = require('path');

// Settings
app.set('port', config.PORT)

// Routes
app.get('/',(req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>New Joiners profiles manager</h1>')
    res.write('<h2>Upload form</h2>')
})
module.exports = app;