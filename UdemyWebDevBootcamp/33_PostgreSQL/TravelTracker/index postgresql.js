// importing csv data, comment out when done
// const fs = require("fs");
// const csvParser = require("csv-parser");

// import csv data: world-food
// comment out when done
// const csvData = [];

// fs.createReadStream("./world-food.csv")
//   .pipe(csvParser())
//   .on("data", (data) => {
//       csvData.push(data);
//   })
//   .on("end", async () => {
//     for (const c of csvData) {
//       await knex("world_food").insert({
//         id: c.id,
//         country: c.Country,
//         rice_production: c.Rice,
//         wheat_production: c.Wheat,
//       });
//     }
//   });

// import csv data: countries
// comment out when done
// const csvData = [];

// fs.createReadStream("./countries.csv")
//   .pipe(csvParser())
//   .on("data", (data) => {
//       csvData.push(data);
//   })
//   .on("end", async () => {
//     for (const c of csvData) {
//       await knex("countries").insert({
//         id: c.id,
//         country_code: c.country_code,
//         country_name: c.country_name,
//       });
//     }
//   });

// connect to postgres database
// comment out when done
// const knex = require("knex")({
//   // We are using PostgreSQL
//   client: "postgres",
//   // Use the `DATABASE_URL` environment variable we provide to connect to the Database
//   // It is included in your Replit environment automatically (no need to set it up)
//   connection: process.env.DATABASE_URL,

//   // Optionally, you can use connection pools to increase query performance
//   pool: { min: 0, max: 80 },
// });

// Travel Tracker app functionality
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "neon",
  host: "ep-calm-bird-21098897.us-east-2.aws.neon.tech",
  database: "neondb",
  password: "ou4zF0yQLibC",
  port: 5432,
  ssl: true,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getCountries() {
  const result = await db.query("SELECT * FROM countries");
  return result;
}

// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

// INSERT a new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  let result;

  try {
    result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [input],
    );
    const data = result.rows[0];
    const countryCode = data.country_code;
  } catch (err) {
    const countries = await checkVisisted();
    res.render("index.ejs", { 
      countries: countries, 
      total: countries.length,
      error: "Country does not exist! Please try again",
    });
  }

  if (result.rows.length !== 0) {
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode],
      );
    } catch (err) {
      const countries = await checkVisisted();
      res.render("index.ejs", { 
        countries: countries, 
        total: countries.length,
        error: "Country has already been added!",
      });
    }

    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
