require("dotenv").config();
const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: 'public/uploads' });
const fs = require("fs");
const cloud_name = process.env.CLOUDINARY_NAME;
const cloud_apikey = process.env.CLOUDINARY_KEY;
const cloud_secret = process.env.CLOUDINARY_SECRET;
const cloudinary = require("cloudinary");

uploadCDNY = (req, res, next) => {
    if(req.file) {
        cloudinary.uploader.upload(`public/uploads/${req.file.filename}`, function(result) {
            fs.unlink(`public/uploads/${req.file.filename}`, err => {
                if (err) throw err;
                console.log("file was successfully deleted");
            });
            req.file.filename = result.url;
            return next();
        });
    } else {
        return next();
    };
};
cloudinary.config({
    cloud_name: cloud_name,
    cloud_apikey: cloud_apikey,
    cloud_secret: cloud_secret
});

router.route("/")
    .post(upload.single('image'), uploadCDNY, tutorControllers.create)