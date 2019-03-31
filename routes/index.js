const express = require("express")
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const loginRoute = require("./login");

//API Routes
router.use("/api", apiRoutes);
router.use("/login", loginRoute);


if (process.env.NODE_ENV === "production"){
    router.use(express.static("../client/build"));
}
//send react app
router.get("*",(req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;