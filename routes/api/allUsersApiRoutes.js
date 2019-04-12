const router = require("express").Router();
const allUserControllers = require("../../controllers/allUserControllers");
const passport = require("passport");

// route to authenticate user
router.get('/currentUser', passport.authenticate('jwt', {session: false}), allUserControllers.findLoggedInUser)

//gets all users
router.route("/")
    .get(allUserControllers.findAll);

// gets random featured tutors
router.route("/random")
    .get(allUserControllers.findRandoms);

// get a user by id    
router.route("/:id")
    .get(passport.authenticate("jwt", {session: false}),
    allUserControllers.findById);

//gets tutors by subject
router.route("/search/:query")
    .get(allUserControllers.findBySubject);

module.exports = router


