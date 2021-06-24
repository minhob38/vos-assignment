const fs = require("fs");
const csv = require("csv-parser");
const iconv = require("iconv-lite");

const getTablesFromCsv = async (csvPath) => {
  return new Promise((resolve, reject) => {
    const tables = [];

    fs.createReadStream(csvPath)
      .pipe(iconv.decodeStream("euc-kr"))
      .pipe(csv({}))
      .on("data", (row) => {
        tables.push({
          "pnu": row["고유번호"],
          "base_year": row["기준연도"],
          "base_month": row["기준월"].length === 2 ? row["기준월"] : `0${row["기준월"]}`,
          "public_price": row["공시지가"],
        });
      })
      .on("end", () => resolve(tables));
  });
};

module.exports = getTablesFromCsv;
