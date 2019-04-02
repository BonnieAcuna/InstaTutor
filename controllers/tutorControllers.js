const db = require("../models");

const findRandomVal = arr => Math.floor(Math.random() * arr.length);

module.exports = {
    findAll: function (req, res) {
        db.Tutor
        .find({})
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findRandoms: function (req, res) {
        db.Tutor
        .find({})
        .then(dbModel => {
            const newRandomTutors = [];
            const usedRandVals = [];

            while(newRandomTutors.length < 6){
                const newRandVal = findRandomVal(dbModel);
                if(usedRandVals.indexOf(newRandVal) === -1){
                    newRandomTutors.push(dbModel[newRandVal]);
                    usedRandVals.push(newRandVal);
                }
            }

            res.json(newRandomTutors);
        })
        .catch(err => res.status(422).json(err));
    },
    findById: function(req,res){
        db.Tutor
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findBySubject: function(req, res){
        db.Tutor
        .find({subjects: {$in: [req.params.query]}})
        .collation( { locale: 'en_US', strength: 1 } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Tutor
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    },
    update: function(req, res){
        db.Tutor
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Tutor
        .deleteOne({_id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)});
    }
};