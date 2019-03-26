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
    subjects: [{
        type: String,
        required: true
    }],
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Tutor = mongoose.model("Tutor", tutorSchema);
module.exports = Tutor;