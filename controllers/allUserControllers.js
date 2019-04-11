const db = require("../models/AllUsers");

const findRandomVal = arr => Math.floor(Math.random() * arr.length);

module.exports = {
    findAll: (req, res) => {
        db.find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    findRandoms: function (req, res) {
        db.find({userType : "tutor", featured: true})
            .then(dbModel => {
                console.log(dbModel)
                const newRandomTutors = [];
                const usedRandVals = [];
                while (newRandomTutors.length < 6 && dbModel.length > newRandomTutors.length) {
                    const newRandVal = findRandomVal(dbModel);
                    if (usedRandVals.indexOf(newRandVal) === -1) {
                        newRandomTutors.push(dbModel[newRandVal]);
                        usedRandVals.push(newRandVal);
                    }
                }
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
        db.find({subjects: {$in: [ reg ]}, userType: "tutor"})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}