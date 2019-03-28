const router = require("express").Router();
const tutorController = require("../../controllers/tutorControllers");

router.route("/tutors")
    .get(tutorControllers.findAll)
    .post(tutorController.create);

router.route("/tutors/:id")
    .delete(tutorController.remove);

module.exports = router;