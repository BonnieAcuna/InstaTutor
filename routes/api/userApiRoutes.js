const router = require("express").Router();
const userController = require("../../controllers/userControllers");

router.route("/users")
    .get(userControllers.findAll)
    .post(userController.create);

router.route("/user/:id")
    .delete(userController.remove);

module.exports = router;