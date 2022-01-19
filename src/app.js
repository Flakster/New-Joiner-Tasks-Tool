const express = require('express');
const app = express();
const config = require('./utils/config');
const path = require('path');
const multer = require('multer');
const res = require('express/lib/response');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.mimetype =='application/pdf'){
            cb(null, true)
        }
        else {
            cb(new Error('Only .docx and pdf format allowed'))
        }
    }
});


// Settings
app.set('port', config.PORT)
app.use(express.static('public'))

// Routes

app.get('/upload', (req, res) =>{
    res.sendFile(path.join(__dirname , '/views/upload.html'))
})

app.post('/', (req, res) => {
    upload.single('uploadFile')(req, res, err => {
        if (err){
            res.sendFile(path.join(__dirname, '/views/error.html'))
        }
        res.sendFile(path.join(__dirname , '/views/success.html'))
    })
})


module.exports = app;