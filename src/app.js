const express = require('express');
const app = express();
const config = require('./utils/config');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage});

// Settings
app.set('port', config.PORT)

// Routes

app.get('/upload', (req, res) =>{
    res.sendFile(path.join(__dirname , '/views/upload.html'))
})

app.post('/', upload.single('uploadFile'), (req, res) =>{
    res.send('File successfully uploaded')
})

module.exports = app;