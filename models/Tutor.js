const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"  
    },
    subjects: [{
        type: String,
        required: true
    }],
    email: {
        type: String,
        required: true,
        unique: true,
        match: /\S+@\S+\.\S+/
    },
    password: {
        type: String,
        required: true
    }
});

const Tutor = mongoose.model("Tutor", tutorSchema);
module.exports = Tutor;