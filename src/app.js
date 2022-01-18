const express = require('express');
const app = express();
const config = require('./utils/config');
const path = require('path');
const formidable = require('formidable');

// Settings
app.set('port', config.PORT)

// Routes
// app.get('/',(req,res) =>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<h1>New joiners profiles tool</h1>')
//     res.write('<h2>Upload form</h2>')
// })

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname , '/views/upload.html'))
})

app.post('/', (req, res) =>{
    const form = new formidable.IncomingForm()
    form.parse(req)
    
    form.on('fileBegin', function (name, file) {
        //console.log('file: ',file.file.name)
        file.path = path.join(__dirname,  '../uploads/') + file.name
    })
    form.on('file', function (name, file) {
        console.log(" Uploaded file: ", file.name)
    })
    res.sendFile(path.join(__dirname + '/views/upload.html'))
    
})

module.exports = app;