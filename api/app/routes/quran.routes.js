module.exports = app => {
    const quran = require("../controllers/quran.controller.js");
    
    app.get("/quran/", quran.getAll);
    app.get("/quran/findCloserAyah/:sorah/:ayah/:length/:method/", quran.findCloserAyah);
    app.get("/quran/findPageEnd/:sorah/:ayah/:method/", quran.findPageEnd);
};
  