const router = require("express").Router();
const allUserControllers = require("../../controllers/allUserControllers");

//gets all users
router.route("/")
    .get(allUserControllers.findAll);

//get random users based on userType : "tutor"
router.route("/random")
    .get(allUserControllers.findRandoms);

// get a user by id    
router.route("/:id")
    .get(allUserControllers.findById);

//gets tutors by 
router.route("/search/:query")
    .get(allUserControllers.findBySubject);

module.exports = router


