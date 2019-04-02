const router = require("express").Router();
const bcrypt = require("bcrypt");
const tutorControllers = require("../../controllers/tutorControllers");
const Tutor = require("../../models/Tutor");

router.route("/")
<<<<<<< HEAD
//   .get(tutorControllers.findBySubject)
    // .get(tutorControllers.findRandoms)
=======
  .get(tutorControllers.findBySubject)
>>>>>>> ff359abfd71d8f11d5ca44fd794ba06126007e92
    .post((req, res, next) => {
        Tutor.find({ email: req.body.email })
            .exec()
            .then(tutor => {
                if (tutor.length >= 1) {
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
                            const tutor = new Tutor({
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                subjects: req.body.subjects,
                                email: req.body.email,
                                password: hash
                            });
                            tutor.save()
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

router.route("/search/:query")
    .get(tutorControllers.findBySubject);

router.route("/:id")
    .delete(tutorControllers.remove);

router.route("/random")
    .get(tutorControllers.findRandoms)
    

module.exports = router;