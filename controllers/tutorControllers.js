const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Tutor
        .find(req.query)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req,res){
        db.Tutor
        .findById(req.params.id)
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