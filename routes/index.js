const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const loginRoute = require("./login");

//API Routes
router.use("/api", apiRoutes);
router.use("/login", loginRoute);

//send react app
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/public"));
});

module.exports = router;