const mongoose = require("mongoose");
const db = require("../models/AllUsers");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/instaTutor"
);

const allUsersSeed = [
    {
        userType: "tutor",
        firstName: "John",
        lastName: "Smith",
        email: "jsmith@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["React", "HTML", "CSS", "Bootstrap"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jane",
        lastName: "Gomez",
        email: "jgomez@gmail.com",
        password: "password",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Javascript", "Python"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Bill",
        lastName: "Jones",
        email: "bjones@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Math", "Finance", "Economics"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Lawrence",
        lastName: "Morrison",
        email: "lmorrison@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Physics"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Justin",
        lastName: "Benton",
        email: "jbenton@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Algebra", "Math"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Vance",
        lastName: "Gallagher",
        email: "vgallagher@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["History", "Algebra"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Matt",
        lastName: "James",
        email: "mjames@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Chemistry", "Biology"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jennifer",
        lastName: "Simpson",
        email: "jsimpson@gmail.com",
        passord: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Physics", "World History"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Chloe",
        lastName: "Cameron",
        email: "ccameron@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Geometry"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Emily",
        lastName: "Wilkinson",
        email: "ewilkinson@gmail.com",
        password: "password",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Javascript", "Python"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jason",
        lastName: "Brown",
        email: "jbrown@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Chemestry"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Greg",
        lastName: "Williams",
        email: "gwilliams@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Economics", "Math"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jose",
        lastName: "Madueno",
        email: "jmadueno@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Latin America Studies", "Mexican History", "History"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Michaela",
        lastName: "Johnson",
        email: "mjohnson@gmail.com",
        password: "password",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["History", "Italian"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Marcia",
        lastName: "Jones",
        email: "mjones@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["English", "Writing I"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Angela",
        lastName: "Marquez",
        email: "amarquez@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Spanish I", "Spanish II"],
        featured: true
    },
    {
        userType: "user",
        firstName: "Jake",
        lastName: "Gonzales",
        email: "jg@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
    },
    {
        userType: "user",
        firstName: "Michael",
        lastName: "Johansen",
        email: "mj@gmail.com",
        password: "password",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
    },
    {
        userType: "user",
        firstName: "Maria",
        lastName: "Mendez",
        email: "mm@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
    },
    {
        userType: "user",
        firstName: "Carlos",
        lastName: "Perez",
        email: "cp@gmail.com",
        password: "password",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
    }
]

db.remove({})
    .then(() => db.collection.insertMany(allUsersSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });