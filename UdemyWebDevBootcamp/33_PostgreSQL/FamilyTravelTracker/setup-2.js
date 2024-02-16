// importing csv data, comment out when done
// leave off "type": "module" in package.json to use const = require imports
const fs = require("fs");
const csvParser = require("csv-parser");

// // import csv data: countries
const csvData = [];

fs.createReadStream("./countries.csv")
  .pipe(csvParser())
  .on("data", (data) => {
      csvData.push(data);
  })
  .on("end", async () => {
    for (const c of csvData) {
      await knex("countries").insert({
        id: c.id,
        country_code: c.country_code,
        country_name: c.country_name,
      });
    }
  });

// connect to sqlite database
const knex = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: "./tracker.db"
  },
  useNullAsDefault: false
});