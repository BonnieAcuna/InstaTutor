const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require("../models/AllUsers")
const secret = require("./secret")


module.exports = function (passport) {

    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = secret.secret;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log("inside passport")
        User.findOne({ email: jwt_payload.email }, function (err, user) {
            if (err) {
                console.log(err)
                return done(err, false);
            }
            if (user) {
                console.log(user)
                return done(null, user);
            } else {
                console.log(jwt_payload)
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
    // passport.serializeUser(function (user, done) {
    //     done(null, user.id);
    // });

    // passport.deserializeUser(function (id, done) {
    //     User.findById(id, function (err, user) {
    //         done(err, user);
    //     });
    // });
};
