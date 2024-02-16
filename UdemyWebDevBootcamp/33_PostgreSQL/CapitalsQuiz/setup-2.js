// importing csv data, comment out when done
// leave off "type": "module" in package.json to use const = require imports
const fs = require("fs");
const csvParser = require("csv-parser");

// import csv data: capitals
const capitalsData = [];

fs.createReadStream("./capitals.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    capitalsData.push(data);
  })
  .on("end", async () => {
    // console.log(capitalsData);
    for (const capital of capitalsData) {
      // insert capital into capitals table
      await knex("capitals").insert({
        id: capital.id,
        country: capital.country,
        capital: capital.capital,
      });
    }
  });

// connect to sqlite database
const knex = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: "./capitals.db"
  },
  useNullAsDefault: false
});