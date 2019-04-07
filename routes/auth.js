const express = require("express")
const router = express.Router();
const AllUsers = require("../models/AllUsers");
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
var passport = require('passport');
var secret = require('../config/secret');
require('../config/passport')(passport);

// Validate password
var comparePassword = function (typedPassword, password) {
    return bcrypt.compareSync(typedPassword, password)
}

// Signup route
router.post("/register", (req, res) => {
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
                            subjects: req.body.subjects
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
                                res.status(500).json({
                                    message: "Unable to create user",
                                    error: err
                                });
                            });
                    }
                })
            }
        })
});

//Login route
router.post("/login", (req, res) => {

    // example with headers object
    console.log(req.headers);
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

module.exports = router;