const router = require("express").Router();
const allUsersApiRoutes = require("./allUsersApiRoutes")

router.use("/allUsers", allUsersApiRoutes);

module.exports = router;