const path = require('path');
const extractText = require('office-text-extractor');
const strings = require('../helpers/strings');
const message_broker = require('../helpers/message_broker');

const multer = require('multer');
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
})

module.exports = {
    upload_form: (req, res) => {
        res.sendFile(path.join(__dirname , '../views/upload.html'))
    },
    process_file: (req, res) =>{
        upload.single('uploadFile')(req, res, err => {
            if (err){
                res.sendFile(path.join(__dirname, '../views/error.html'))
            }
            res.sendFile(path.join(__dirname , '../views/success.html'))
            extractText(path.join(req.file.destination, req.file.originalname))
            .then((text =>{
                const extracted_info = strings.extract_info(text)
                message_broker.send(extracted_info)
             }))
        })
    } 
}