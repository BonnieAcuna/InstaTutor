const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alluserSchema = new Schema({
    userType: {
        type: String,
        default: "user"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /\S+@\S+\.\S+/
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
    },
    subjects: [{
        type: String
    }],
    featured: {
        type: Boolean,
        default: false
    }
});

// userSchema.pre('save', function (next) {
//     let user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, null, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// UserSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };

const AllUsers = mongoose.model("AllUsers", alluserSchema);
module.exports = AllUsers;