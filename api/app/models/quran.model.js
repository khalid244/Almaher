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

Quran.findCloserDestinationBySorahAyahLengthType = (sorah, ayah, length, type, result) => {
    const typeString = type == 0 ? "RSum" : "LSum";
    sql.query(`SELECT EndPoint.RID, EndPoint.LID, EndPoint.Sorah, EndPoint.Ayah, EndPoint.Length, EndPoint.Page, EndPoint.Hizb, EndPoint.RSum, EndPoint.LSum, ABS(StartPoint.${typeString} - EndPoint.${typeString} - StartPoint.Length) as RealLength FROM main as EndPoint, (SELECT * FROM main WHERE Sorah=${sorah} AND Ayah=${ayah}) as StartPoint ORDER BY ABS(StartPoint.${typeString} - EndPoint.${typeString} + ${length} - StartPoint.Length) LIMIT 1;`, (err, res) => {
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

module.exports = Quran;