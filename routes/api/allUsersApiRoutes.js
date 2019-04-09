require("dotenv").config();
const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: 'public/uploads' });
const fs = require("fs");
const cloud_name = process.env.CLOUDINARY_NAME;
const cloud_apikey = process.env.CLOUDINARY_KEY;
const cloud_secret = process.env.CLOUDINARY_SECRET;
const cloudinary = require("cloudinary");
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

// upload images
uploadCDNY = (req, res, next) => {
    if(req.file) {
        cloudinary.uploader.upload(`public/uploads/${req.file.filename}`, function(result) {
            fs.unlink(`public/uploads/${req.file.filename}`, err => {
                if (err) throw err;
                console.log("file was successfully deleted");
            });
            req.file.filename = result.url;
            return next();
        });
    } else {
        return next();
    };
};
cloudinary.config({
    cloud_name: cloud_name,
    cloud_apikey: cloud_apikey,
    cloud_secret: cloud_secret
});

router.get("/", passport.authenticate("jwt", {session: false}),allUserControllers.findAll)
router.get('/currentUser', passport.authenticate('jwt', {session: false}), allUserControllers.findLoggedInUser)
//gets all users
// router.route("/")
//     .get(allUserControllers.findAll);

// get images 
router.route("/")
    .post(upload.single('image'), uploadCDNY, allUserControllers.create)


//get random users based on userType : "tutor"
router.route("/random")
    .get(passport.authenticate("jwt", {session: false}),
    allUserControllers.findRandoms);

// get a user by id    
router.route("/:id")
    .get(allUserControllers.findById);

//gets tutors by 
router.route("/search/:query")
    .get(allUserControllers.findBySubject);

module.exports = router


