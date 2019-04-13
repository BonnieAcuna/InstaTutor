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
        image:  "https://studentexchange.emu.edu.tr/PublishingImages/Images/IMG_6385.JPG?RenditionID=6",
        subjects: ["React", "HTML", "CSS", "Bootstrap"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jane",
        lastName: "Gomez",
        email: "jgomez@gmail.com",
        password: "password",
        image:   "https://static.rms.com/email/images/anaiskatz.jpeg",
        subjects: ["Javascript", "Python"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Bill",
        lastName: "Jones",
        email: "bjones@gmail.com",
        password: "password",
        image:  "https://www.scholarships.unsw.edu.au/sites/default/files/styles/profile/public/profiles/David%20Abi-Hanna3.jpg?itok=p3_C1l1q",
        subjects: ["Math", "Finance", "Economics"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Lawrence",
        lastName: "Morrison",
        email: "lmorrison@gmail.com",
        password: "password",
        image:  "https://jkweb.berkeley.edu/external/images/people/former/Cameron_Hu_small.jpg",
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
        image:  "https://79s1uk97q9-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/jack.jpg",
        subjects: ["History", "Algebra"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Matt",
        lastName: "James",
        email: "mjames@gmail.com",
        password: "password",
        image:  "https://www.expectmoretn.org/wp-content/uploads/2016/02/Preston-Nicely.jpg",
        subjects: ["Chemistry", "Biology"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jennifer",
        lastName: "Simpson",
        email: "jsimpson@gmail.com",
        passord: "password",
        image:  "https://www.brookings.edu/wp-content/uploads/2016/07/hennessey.jpg",
        subjects: ["Physics", "World History"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Chloe",
        lastName: "Cameron",
        email: "ccameron@gmail.com",
        password: "password",
        image:  "https://www.goshen.edu/wp-content/uploads/sites/4/2012/06/SIP-Marita-Beachy.jpg",
        subjects: ["Geometry"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Emily",
        lastName: "Wilkinson",
        email: "ewilkinson@gmail.com",
        password: "password",
        image:   "https://www.learnamericanenglishonline.com/images/femalestudent1.JPG",
        subjects: ["Javascript", "Python"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jason",
        lastName: "Brown",
        email: "jbrown@gmail.com",
        password: "password",
        image:  "https://pbs.twimg.com/profile_images/1056917652894113794/Rg1NRfS9_400x400.jpg",
        subjects: ["Chemistry"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Greg",
        lastName: "Williams",
        email: "gwilliams@gmail.com",
        password: "password",
        image:  "https://www.peerforward.org/wp-content/uploads/2016/11/Screen-Shot-2016-09-26-at-9.47.18-AM.png",
        subjects: ["Economics", "Math"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Jose",
        lastName: "Madueno",
        email: "jmadueno@gmail.com",
        password: "password",
        image:  "https://cola.unh.edu/sites/default/files/styles/portrait_480x600/public/person/2018/08/pulecio-mauricio-2018-1920x2885.jpg?itok=9j3N6P-a&timestamp=1535573192",
        subjects: ["Latin America Studies", "Mexican History", "History"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Michaela",
        lastName: "Johnson",
        email: "mjohnson@gmail.com",
        password: "password",
        image:   "https://photos.spareroom.com/images/flatshare/listings/large/20/16/201632422.jpg",
        subjects: ["History", "Italian"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Marcia",
        lastName: "Jones",
        email: "mjones@gmail.com",
        password: "password",
        image:  "https://assets.sourcemedia.com/dims4/default/907ed33/2147483647/resize/215x%3E/quality/90/?url=https%3A%2F%2Fassets.sourcemedia.com%2F48%2F29%2F66db4f6b4b5ca941577cd610c163%2Fkathie-miley-headshot.jpg",
        subjects: ["English", "Writing I"],
        featured: true
    },
    {
        userType: "tutor",
        firstName: "Angela",
        lastName: "Marquez",
        email: "amarquez@gmail.com",
        password: "password",
        image:  "https://static1.squarespace.com/static/577ecb5ae4fcb56088ad4a83/t/5994aae503596e5d7059bc90/1502915313235/?format=1000w",
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