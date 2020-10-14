module.exports = app => {
    const quran = require("../controllers/quran.controller.js");
    
    app.get("/quran/", quran.getAll);
    app.get("/quran/:sorah/:ayah/:length/:type/", quran.findCloserDestination);
};
  