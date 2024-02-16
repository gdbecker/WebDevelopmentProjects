// importing csv data
// leave off "type": "module" in package.json to use const = require imports
const fs = require("fs");
const csvParser = require("csv-parser");

// import csv data: flags
const flagsData = [];

fs.createReadStream("./flags.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    flagsData.push(data);
  })
  .on("end", async () => {
    // console.log(capitalsData);
    for (const flag of flagsData) {
      // insert flag into flags table
      await knex("flags").insert({
        id: flag.id,
        name: flag.name,
        flag: flag.flag,
      });
    }
  });

// connect to sqlite database
const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./flags.db",
  },
  useNullAsDefault: false,
});