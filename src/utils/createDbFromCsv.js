const fs = require("fs");
const csv = require("csv-parser");
const iconv = require("iconv-lite");
const es = require("event-stream");
const { LandValue } = require("../../database/models");

const createDbFromCsv = async (csvPath) => {
  let tables = [];

  const stream = fs.createReadStream(csvPath)
    .pipe(iconv.decodeStream("euc-kr"))
    .pipe(csv({}))
    .pipe(es.mapSync((row) => {
      tables.push({
        "pnu": row["고유번호"],
        "base_year": row["기준연도"],
        "base_month": row["기준월"].length === 2 ? row["기준월"] : `0${row["기준월"]}`,
        "public_price": row["공시지가"],
      });

      if (tables.length >= 100000) {
        stream.pause();

        (async () => {
          await LandValue.bulkCreate(tables);
          stream.resume();
        })(tables);

        tables = [];
      }
    }));

  return new Promise((resolve, reject) => {
    stream.on("end", async () => {
      await LandValue.bulkCreate(tables);
      resolve();
    });

    stream.on("error", () => reject());
  });
};

module.exports = createDbFromCsv;
