var db = require("../models");

module.exports = function(app) {

    // GET ALL
    app.get("/api/proofs", function(req, res) {
        db.proof.findAll({}).then(function(dbProof) {
            res.json(dbProof)
        })
    })

    // GET ONE
    app.get("/api/proofs/:id", function(req, res) {
        db.proof.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbProof) {
            res.json(dbProof)
        })
    })

    // POST ROUTE
    app.post("/api/proofs", function(req, res) {
        db.proof.create(req.body).then(function(dbProof) {
            res.json(dbProof)
        })
    })

    // DELETE ROUTE
    app.delete("/api/proofs/:id", function(req, res) {
        db.proof.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbProof) {
            res.json(dbProof)
        })
    })


}