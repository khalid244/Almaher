const Quran = require("../models/quran.model.js");

exports.findCloserAyah = (req, res) => {
    Quran.findCloserAyahBySorahAyahLengthMethod(req.params.sorah, req.params.ayah, req.params.length, req.params.method, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found destination with sorah ${req.params.sorah}, ayah ${req.params.ayah}, ${req.params.length} and ${req.params.method}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with sorah ${req.params.sorah}, ayah ${req.params.ayah}, ${req.params.length} and ${req.params.method}.`
                });
            }
        } else res.send(data);
    }); 
};

exports.findCloserAyahById = (req, res) => {
    Quran.findCloserAyahByIdLengthMethod(req.params.Id, req.params.length, req.params.method, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found destination with Id ${req.params.Id}, ${req.params.length} and ${req.params.method}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with Id ${req.params.Id}, ${req.params.length} and ${req.params.method}.`
                });
            }
        } else res.send(data);
    }); 
};

exports.findCloserStopPointById = (req, res) => {
    Quran.findCloserStopPointByIdLengthMethod(req.params.Id, req.params.length, req.params.method, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found destination with Id ${req.params.Id}, ${req.params.length} and ${req.params.method}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with Id ${req.params.Id}, ${req.params.length} and ${req.params.method}.`
                });
            }
        } else res.send(data);
    }); 
};
//=============================================================================================
exports.findCloserAyahWayHizbById = (req, res) => {
    Quran.findCloserAyahWayHizbByIdLength(req.params.Id, req.params.length, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found destination with Id ${req.params.Id} and  ${req.params.length}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with Id ${req.params.Id} and ${req.params.length}.`
                });
            }
        } else res.send(data);
    }); 
};
//=============================================================================================
exports.getID = (req, res) => {
    Quran.getIDBySorahAyah(req.params.sorah, req.params.ayah, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found destination with sorah ${req.params.sorah} and ayah ${req.params.ayah} .`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with sorah ${req.params.sorah} and ayah ${req.params.ayah}.`
                });
            }
        } else res.send(data);
    }); 
};

exports.findRealeLength = (req, res) => {
    Quran.findRealeLengthForDaras(req.params.startSorah, req.params.startAyah,req.params.endSorah, req.params.endAyah, req.params.method, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found destination with startSorah ${req.params.startSorah}, startAyah ${req.params.startAyah}, endSoarh ${req.params.endSorah}, endAyah ${req.params.endAyah} and ${req.params.method}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving destination with startSorah ${req.params.startSorah}, startAyah ${req.params.startAyah}, endSoarh ${req.params.endSorah}, endAyah ${req.params.endAyah} and ${req.params.method}.`
                });
            }
        } else res.send(data);
    }); 
};

exports.findPageEnd = (req, res) => {
    Quran.findPageEndBySorahAyahMethod(req.params.sorah, req.params.ayah, req.params.method, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found page end with sorah ${req.params.sorah}, ayah ${req.params.ayah} and ${req.params.method}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving page end with sorah ${req.params.sorah}, ayah ${req.params.ayah} and ${req.params.method}.`
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

exports.findPageFirst = (req, res) => {
    Quran.findPageFirstBySorahAyahMethod(req.params.sorah, req.params.ayah,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found page end with sorah ${req.params.sorah} and ayah ${req.params.ayah}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving page end with sorah ${req.params.sorah} and ayah ${req.params.ayah}.`
                });
            }
        } else res.send(data);
    }); 
};