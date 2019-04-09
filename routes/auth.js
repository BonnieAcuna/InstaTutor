const express = require("express")
const multer = require("multer");
const cloudinary = require("cloudinary");
const fs = require("fs");
const router = express.Router();
const AllUsers = require("../models/AllUsers");
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
var passport = require('passport');
var secret = require('../config/secret');
require('../config/passport')(passport);

const upload = multer({ dest: 'public/uploads' });
const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
const cloud_apikey = process.env.CLOUDINARY_API_KEY;
const cloud_secret = process.env.CLOUDINARY_API_SECRET;
// Validate password
var comparePassword = function (typedPassword, password) {
    return bcrypt.compareSync(typedPassword, password)
}


// upload images
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
    api_key: cloud_apikey,
    api_secret: cloud_secret
});

// Signup route
router.post("/register", upload.single('image'), uploadCDNY, (req, res) => {
    //find if user has been registered with same email
    AllUsers.find({ email: req.body.email })
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "An account with that email already exist"
                })
            } else {
                //hash password 
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        let newUser = new AllUsers({
                            userType: req.body.userType,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: hash,
                            subjects: req.body.subjects.split(','),
                            image: req.file.filename
                        });
                        //save newUser
                        newUser.save()
                            .then(result => {
                                console.log(result)
                                res.status(201).json({
                                    message: "User Created"
                                })
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    message: "Unable to create user",
                                    error: err
                                });
                            });
                    }
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
});

//Login route
router.post("/login", (req, res) => {
    // example with headers object
    // console.log(req.headers);
    AllUsers.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.send({ success: false, message: "Authentication failed user not found." });
                console.log("no user");
            } else {
                // check if password match db
                if (comparePassword(req.body.password, user.password)) {
                    // create a JWT Token if password matched
                    let token = jwt.sign(user.toJSON(), secret.secret);
                    // return the information including jwt token as json
                    res.json({ success: true, token: "JWT " + token });
                }
                else {
                    res.json({ success: false, message: "Authentication failed" })
                }
            }
        })
        .catch(err => console.log(err))
});

router.get("/logout")

module.exports = router;