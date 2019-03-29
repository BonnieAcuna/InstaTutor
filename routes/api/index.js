const router = require("express").Router();
const tutorApiRoutes = require("./tutorApiRoutes");
const userApiRoutes = require("./userApiRoutes");

router.use("/tutors", tutorApiRoutes);
router.use("/users", userApiRoutes);

module.exports = router;