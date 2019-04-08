const db = require("../models/AllUsers");

const findRandomVal = arr => Math.floor(Math.random() * arr.length);

module.exports = {
    findAll: (req, res) => {
        console.log('Controller Data')
        db.find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    findRandoms: function (req, res) {
        console.log("---------------------------------------")
        console.log(req.user)
        console.log('hit')
        db.find({userType : "tutor"})
            .then(dbModel => {
                // console.log('success')
                const newRandomTutors = [];
                const usedRandVals = [];
                // console.log(newRandomTutors);
                while (newRandomTutors.length < 6) {
                    const newRandVal = findRandomVal(dbModel);
                    // console.log(newRandVal);
                    if (usedRandVals.indexOf(newRandVal) === -1) {
                        newRandomTutors.push(dbModel[newRandVal]);
                        usedRandVals.push(newRandVal);
                    }
                }
                // console.log(newRandomTutors);
                res.json(newRandomTutors);
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function(req,res){
        db.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findLoggedInUser: function(req, res){
        let user = req.user;
        user.password = null;
        res.json({user});
    },
    findBySubject: function(req, res){
        let str = `.*${req.params.query}.*`
        let reg = new RegExp(str, "gi")
        db.find({subjects: {$in: [ reg ]}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}