const router = require("express").Router();
const allUserControllers = require("../../controllers/allUserControllers");
const passport = require("passport");

//get token
const getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

// router.get("/", passport.authenticate("jwt", {session: false}),allUserControllers.findAll)
router.get('/currentUser', passport.authenticate('jwt', {session: false}), allUserControllers.findLoggedInUser)
//gets all users
router.route("/")
    .get(allUserControllers.findAll);

// // get images 
// router.route("/")
//     .post(allUserControllers.create)


//get random users based on userType : "tutor"
// router.route("/random")
//     .get(passport.authenticate("jwt", {session: false}),
//     allUserControllers.findRandoms);
router.route("/random")
    .get(allUserControllers.findRandoms);

// get a user by id    
router.route("/:id")
    .get(passport.authenticate("jwt", {session: false}),
    allUserControllers.findById);

//gets tutors by 
router.route("/search/:query")
    .get(allUserControllers.findBySubject);

module.exports = router


