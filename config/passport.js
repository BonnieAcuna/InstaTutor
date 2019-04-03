const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require("../models/User")
const secret = require("./secret")


module.exports = function (passport) {

    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = secret.secret;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log("inside passport")
        User.findOne({ id: jwt_payload.sub }, function (err, user) {
            if (err) {
                console.log(err)
                return done(err, false);
            }
            if (user) {
                console.log(user)
                return done(null, user);
            } else {
                console.log(last)
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
};