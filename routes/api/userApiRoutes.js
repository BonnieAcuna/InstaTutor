const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

router.route("/")
    .get(userControllers.findAll)
    .post(userControllers.create);

router.route("/:id")
    .delete(userControllers.remove);

module.exports = router;