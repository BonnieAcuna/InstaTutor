const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/instaTutor"
);

const tutorSeed = [
    {
        firstName: "John",
        lastName: "Smith",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["React", "HTML", "CSS", "Bootstrap"],
        email: "jsmith@gmail.com",
        password: "password"
    },
    {
        firstName: "Jane",
        lastName: "Gomez",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Javascript", "Python"],
        email: "jgomez@gmail.com",
        password: "password"
    },
    {
        firstName: "Bill",
        lastName: "Jones",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Math", "Finance", "Economics"],
        email: "bjones@gmail.com",
        password: "password"
    },
    {
        firstName: "Lawrence",
        lastName: "Morrison",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Physics"],
        email: "lmorrison@gmail.com",
        password: "password"
    },
    {
        firstName: "Justin",
        lastName: "Benton",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Algebra", "Math"],
        email: "jbenton@gmail.com",
        password: "password"
    },
    {
        firstName: "Vance",
        lastName: "Gallagher",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["History", "Algebra"],
        email: "vgallagher@gmail.com",
        password: "password"
    },
    {

        firstName: "Matt",
        lastName: "James",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Chemistry", "Biology"],
        email: "mjames@gmail.com",
        password: "password"
    },
    {
        firstName: "Jennifer",
        lastName: "Simpson",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Physics", "World History"],
        email: "jsimpson@gmail.com",
        passord: "password"
    },
    {
        firstName: "Chloe",
        lastName: "Cameron",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Geometry"],
        email: "ccameron@gmail.com",
        password: "password"
    },
    {
        firstName: "Emily",
        lastName: "Wilkinson",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Javascript", "Python"],
        email: "ewilkinson@gmail.com",
        password: "password"
    },
    {
        firstName: "Jason",
        lastName: "Brown",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Chemestry"],
        email: "jbrown@gmail.com",
        password: "password"
    },
    {
        firstName: "Greg",
        lastName: "Williams",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Economics", "Math"],
        email: "gwilliams@gmail.com",
        password: "password"
    },
    {
        firstName: "Jose",
        lastName: "Madueno",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Latin America Studies", "Mexican History", "History"],
        email: "jmadueno@gmail.com",
        password: "password"
    },
    {
        firstName: "Michaela",
        lastName: "Johnson",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["History", "Italian"],
        email: "mjohnson@gmail.com",
        password: "password"
    },
    {
        firstName: "Marcia",
        lastName: "Jones",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["English", "Writing I"],
        email: "mjones@gmail.com",
        password: "password"
    },
    {
        firstName: "Angela",
        lastName: "Marquez",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Spanish I", "Spanish II"],
        email: "amarquez@gmail.com",
        password: "password"
    }
]

db.Tutor
    .remove({})
    .then(() => db.Tutor.collection.insertMany(tutorSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });