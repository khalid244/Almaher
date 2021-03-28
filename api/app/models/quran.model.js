const sql = require("./db.js");

// constructor
const Quran = function(quran) {
    this.rid = quran.rid;
    this.lid = quran.lid;
    this.sorah = quran.sorah;
    this.ayah = quran.ayah;
    this.length = quran.length;
    this.page = quran.page;
    this.hizb = quran.hizb;
    this.juz = quran.juz;
    this.rsum = quran.rsum;
    this.lsum = quran.lsum;
};

Quran.getAllData = result => {
    sql.query("SELECT * FROM main", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("quran: ", res);
        result(null, res);
    });
};

Quran.findCloserAyahBySorahAyahLengthMethod = (sorah, ayah, length, method, result) => {
    const methodString = method == 0 ? "RSum" : "LSum";
    sql.query(`SELECT EndPoint.RID, EndPoint.LID, EndPoint.Sorah, EndPoint.Ayah, EndPoint.Length, EndPoint.Page, EndPoint.Hizb, EndPoint.RSum, EndPoint.LSum, ABS(StartPoint.${methodString} - EndPoint.${methodString} - StartPoint.Length) as RealLength FROM main as EndPoint, (SELECT * FROM main WHERE Sorah=${sorah} AND Ayah=${ayah}) as StartPoint WHERE  EndPoint.RID > StartPoint.RID ORDER BY ABS(StartPoint.${methodString} - EndPoint.${methodString} + ${length} - StartPoint.Length) LIMIT 1;`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log('all res:', res);
            console.log('Frist index res:', res[0]);
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Quran.findCloserAyahByIdLengthMethod = (Id, length, method, result) => {
    const methodString = method == 0 ? "RSum" : "LSum";
    const ID = method == 0 ? "RID" : "LID";
    sql.query(`SELECT EndPoint.RID, EndPoint.LID, EndPoint.Sorah, EndPoint.Ayah, EndPoint.Length, EndPoint.Page, EndPoint.Hizb, EndPoint.RSum, EndPoint.LSum, ABS(StartPoint.${methodString} - EndPoint.${methodString} - StartPoint.Length) as RealLength FROM main as EndPoint, (SELECT * FROM main WHERE ${ID}=${Id}) as StartPoint WHERE  EndPoint.${ID} > StartPoint.${ID} AND EndPoint.Ayah != 0 ORDER BY ABS(StartPoint.${methodString} - EndPoint.${methodString} + ${length} - StartPoint.Length) LIMIT 1;`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log('all res:', res);
            console.log('Frist index res:', res[0]);
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Quran.findCloserStopPointByIdLengthMethod = (Id, length, method, result) => {
    const methodString = method == 0 ? "RSum" : "LSum";
    const ID = method == 0 ? "RID" : "LID";
    sql.query(`SELECT EndPoint.RID, EndPoint.LID, EndPoint.Sorah, (SELECT max(ayah) as val from main where Sorah=EndPoint.Sorah) AS Ayah, EndPoint.Length, EndPoint.Page, EndPoint.Hizb, EndPoint.RSum, EndPoint.LSum, ABS(StartPoint.${methodString} - EndPoint.${methodString} - StartPoint.Length) as RealLength FROM main as EndPoint, (SELECT * FROM main WHERE ${ID}=${Id}) as StartPoint WHERE  EndPoint.${ID} > StartPoint.${ID} AND EndPoint.StopPoint = 1 AND EndPoint.Ayah != 0 ORDER BY ABS(StartPoint.${methodString} - EndPoint.${methodString} + ${length} - StartPoint.Length) LIMIT 1;`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log('all res:', res);
            console.log('Frist index res:', res[0]);
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};
//===================================================================================================
Quran.findCloserAyahWayHizbByIdLength = (Id, length, result) => {
    sql.query(`SELECT EndPoint.RID, EndPoint.LID, EndPoint.Sorah,EndPoint.Ayah, EndPoint.Length, EndPoint.Page, EndPoint.Hizb, EndPoint.RSum, EndPoint.LSum , ABS(StartPoint.RSum - EndPoint.RSum - StartPoint.Length) as RealLength FROM main as EndPoint , (SELECT * FROM main WHERE RID=${Id}) as StartPoint ORDER BY ABS (EndPoint.RID - (SELECT max(RID) as val from main where Hizb=StartPoint.Hizb+${length})) LIMIT 1;`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log('all res:', res);
            console.log('Frist index res:', res[0]);
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};
//==================================================================================================
Quran.getIDBySorahAyah = (sorah, ayah, result) => {
    sql.query(`SELECT * FROM main WHERE Sorah = ${sorah} AND Ayah = ${ayah};`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log('all res:', res);
            console.log('Frist index res:', res[0]);
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Quran.findRealeLengthForDaras = (startSorah, startAyah, endSorah, endAyah, method, result) => {
    const methodString = method == 0 ? "RSum" : "LSum";
    sql.query(`SELECT (endPoint.${methodString} - startPoint.${methodString} + startPoint.Length ) as RealLength FROM main as rale ,(SELECT * FROM main WHERE Sorah = ${startSorah} AND Ayah = ${startAyah})as startPoint,(SELECT * FROM  main WHERE Sorah = ${endSorah} AND Ayah = ${endAyah}) as endPoint LIMIT 1`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log('all res realeLength:', res);
            console.log('Frist index res realeLength:', res[0]);
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
    // result(null,{msg : "Hello",startSorah : startSorah,startAyah : startAyah,endSorah : endSoarh,endAyah : endAyah,method : methodString});
};

Quran.findPageEndBySorahAyahMethod = (sorah, ayah, method, result) => {
    const methodString = method == 0 ? "EndPage.RID" : "EndPage.LID";
    sql.query(`SELECT EndPage.RID, EndPage.LID, EndPage.Sorah, EndPage.Ayah, EndPage.Length, EndPage.Page, EndPage.Hizb, EndPage.RSum, EndPage.LSum FROM main as EndPage, (SELECT * FROM main WHERE Sorah=${sorah} AND Ayah=${ayah}) as CurrentPoint WHERE CurrentPoint.Page = EndPage.Page ORDER BY ${methodString} DESC LIMIT 1;`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Quran.findLastAyahInGivenSorah = (sorah, result) => {
    sql.query(`select max(ayah) as lastAyah from main where sorah=${sorah} `, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        result({ kind: "not_found" }, null);
    });
};

Quran.findPageFirstBySorahAyahMethod = (sorah,ayah, result) => {
    sql.query(`SELECT * FROM main  WHERE Page = (SELECT Page FROM main WHERE Ayah = ${ayah} AND Sorah = ${sorah} )  
    ORDER BY Sorah,Ayah  ASC LIMIT 1 `, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        result({ kind: "not_found" }, null);
    });
};

module.exports = Quran;

// SELECT Ayah,Sorah FROM main WHERE
// RID BETWEEN 
// (SELECT A1.RID FROM main as A1 WHERE Ayah = 6 AND Sorah = 2) 
// AND
// (SELECT A2.RID FROM main as A2 WHERE 
//  Ayah = (SELECT EndPoint.Ayah FROM main as EndPoint, (SELECT * FROM main WHERE Sorah=2 AND Ayah=6) as StartPoint ORDER BY ABS(StartPoint.RSum - EndPoint.RSum + 15 - StartPoint.Length) LIMIT 1)
//  AND 
//  Sorah = (SELECT EndPoint.Sorah FROM main as EndPoint, (SELECT * FROM main WHERE Sorah=2 AND Ayah=6) as StartPoint ORDER BY ABS(StartPoint.RSum - EndPoint.RSum + 15 - StartPoint.Length) LIMIT 1) )