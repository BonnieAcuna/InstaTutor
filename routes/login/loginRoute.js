const router = require("express").Router();
const Tutor = require("../../models/Tutor");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const secret = require("../../config/secret");
const jwt = require('jsonwebtoken');

// Validate password
var comparePassword = function (typedPassword, password) {
    return bcrypt.compareSync(typedPassword, password)
}

router.route("/")
    .post((req, res, next) => {
        User.findOne({ email: req.body.email })
    
    .exec()
    .then(user => {
        if (!user) {
            res.send({ success: false, message: "Authentication failed" });
            console.log("no user")
        }
        else {
            if (comparePassword(req.body.password, user.password)) {
                let token = jwt.sign(user.toJSON(), secret.secret);
                res.json({ success: true, token: "JWT " + token });
            }
            else {
                res.json({ success: false, message: "Authentication failed" })
            }
        }
    })
    .catch(err => console.log(err))
})

module.exports = router