const router = require("express").Router();
const bcrypt = require("bcrypt");
const userControllers = require("../../controllers/userControllers");
const User = require("../../models/User");

router.route("/")
    .get(userControllers.findAll)
    .post((req, res, next) => {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length >= 1) {
                    return res.status(409).json({
                        message: "An account with the same email is already registerd"
                    })
                }
                else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            });
                        } else {
                            const user = new User({
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                email: req.body.email,
                                password: hash
                            });
                            user.save()
                                .then(result => {
                                    console.log(result)
                                    res.status(201).json({
                                        message: "User Created"
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        message: "Product not found",
                                        error: err
                                    });
                                });
                        }
                    }
                    )
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Unable to process at this time",
                    error: err
                });
            });
    }
    );

router.route("/:id")
    .delete(userControllers.remove);

module.exports = router;