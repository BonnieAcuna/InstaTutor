const router = require("express").Router();
const Tutor = require("../../models/Tutor");
const User = require("../../models/User");
const bcrypt = require("bcrypt");

router.route("/")
    .post((req, res, next) => {
        User.findOne({ email: req.body.email })
            .exec()
            .then(user => {
                if (user === null) {
                    Tutor.findOne({ email: req.body.email })
                        .then(tutor => {
                            console.log(tutor)
                            if (tutor === null) {
                                return res.status(401).json({
                                    message: "Auth failed"
                                })
                            }
                            bcrypt.compare(res.body.password, tutor.password, (err, result) => {
                                if (err){
                                    return res.status(401).json({
                                        message: "Auth Failed"
                                    });
                                }
                                if (result){}
                            })
                        })
                }
                    
                
            })
            .catch(err => console.log(err))
    });

module.exports = router;