const router = require("express").Router();
// const tutorApiRoutes = require("./tutorApiRoutes");
// const userApiRoutes = require("./userApiRoutes");
const allUsersApiRoutes = require("./allUsersApiRoutes")

// router.use("/tutors", tutorApiRoutes);
// router.use("/users", userApiRoutes);
router.use("/allUsers", allUsersApiRoutes);

module.exports = router;