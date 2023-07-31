const express = require("express");
const router = express.Router();
const multer = require("multer");
const {connection} = require('../database/db')

var storage = multer.diskStorage
({
    destination : function(req, file, cb)
    {
        cb(null, './public');
    },
    filename : function(req, file, cb)
    {
        cb(null, Date.now() + file.originalname);
    }
})

var upload = multer({storage});
// const multiupload = upload.fields()

router.post
(
    '/',(req, res)=>
    {
        const content = req.query.blog;
        const name = req.query.name;
        const data = { content: content, name: name };
        connection.query('INSERT INTO blogs SET ?', data, (err, result) =>
        {
            if (err)
            {
                console.error('Error saving data:', err);
            }
            else
            {
                console.log('Data Saved');
                res.redirect('https://blogs-writer.netlify.app/Create');
            }
        });
    }
)


module.exports = router;
