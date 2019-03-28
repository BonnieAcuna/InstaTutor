const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/instaTutor"
);

const tutorSeed = [
    {
        firstName:"John",
        lastName: "Smith",
        subjects: ["React", "HTML", "css", "Bootstrap"],
        email:  ""
        password:
    },
    {
        firstName: "Bonnie",
        lastName:   "Acuna",
        subjects: ["React", "HTML", "css", "Bootstrap"],
        email: "bonnie@gmail.com"
        password: "password"
    },
    {
        firstName:
        lastName:
        subjects: [],
        email:
        password:
    },
    {
        firstName:
        lastName:
        subjects: [],
        email:
        password:
    }
]