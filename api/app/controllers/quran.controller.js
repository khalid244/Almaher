const Quran = require("../models/quran.model.js");

exports.findCloserDestination = (req, res) => {
    Quran.findCloserDestinationBySorahAyahLengthType(req.params.sorah, req.params.ayah, req.params.length, req.params.type, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found destination with sorah ${req.params.sorah}, ayah ${req.params.ayah}, ${req.params.length} and ${req.params.type}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with sorah ${req.params.sorah}, ayah ${req.params.ayah}, ${req.params.length} and ${req.params.type}.`
                });
            }
        } else res.send(data);
    }); 
};

exports.getAll = (req, res) => {
    Quran.getAllData((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving quran."
            });
        else res.send(data);
    });
};

exports.findLastAyah = (req, res) => {
    Quran.findLastAyahInGivenSorah(req.params.sorah, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Last Ayah ${req.params.sorah}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with sorah ${req.params.sorah}.`
                });
            }
        } else res.send(data);
    }); 
};