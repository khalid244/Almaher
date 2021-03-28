module.exports = app => {
    const quran = require("../controllers/quran.controller.js");
    
    app.get("/quran/", quran.getAll);
    app.get("/quran/findCloserAyah/:sorah/:ayah/:length/:method/", quran.findCloserAyah);
    app.get("/quran/findCloserAyahById/:Id/:length/:method/", quran.findCloserAyahById);
    app.get("/quran/findCloserStopPointById/:Id/:length/:method/", quran.findCloserStopPointById);
    app.get("/quran/findCloserAyahWayHizbById/:Id/:length/", quran.findCloserAyahWayHizbById);
    app.get("/quran/getID/:sorah/:ayah/", quran.getID);
    app.get("/quran/findRealeLength/:startSorah/:startAyah/:endSorah/:endAyah/:method/", quran.findRealeLength);
    app.get("/quran/findPageEnd/:sorah/:ayah/:method/", quran.findPageEnd);
    app.get("/quran/findPageFirst/:sorah/:ayah/:method/", quran.findPageFirst);
    app.get("/quran/findLastAyahInSorah/:sorah/", quran.findLastAyah);
};
  