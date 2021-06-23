const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const iconv  = require("iconv-lite");

const getTablesFromCsv = async (path) => {

  return new Promise((resolve, reject) => {
    const tables = [];

    fs.createReadStream(path)  
      .pipe(iconv.decodeStream("euc-kr")) 
      .pipe(csv({}))
      .on("data",(row) => {
        tables.push({
          "pnu": row["고유번호"],
          "base_year": row["기준연도"],
          "base_month": row["기준월"],
          "public_price": row["공시지가"],
        });
      })
      .on("end", () => resolve(tables));
  });
};

module.exports = getTablesFromCsv;
