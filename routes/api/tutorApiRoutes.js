const router = require("express").Router();
const tutorControllers = require("../../controllers/tutorControllers");

router.route("/")
    .get(tutorControllers.findAll)
    .post(tutorControllers.create);

router.route("/:id")
    .delete(tutorControllers.remove);

module.exports = router;