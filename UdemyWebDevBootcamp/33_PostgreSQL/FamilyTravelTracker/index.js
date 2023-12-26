// importing csv data, comment out when done
// leave off "type": "module" in package.json to use const = require imports
// const fs = require("fs");
// const csvParser = require("csv-parser");

// // import csv data: countries
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

// // connect to postgres database
// const knex = require("knex")({
//   // We are using PostgreSQL
//   client: "postgres",
//   // Use the `DATABASE_URL` environment variable we provide to connect to the Database
//   // It is included in your Replit environment automatically (no need to set it up)
//   connection: process.env.DATABASE_URL,

//   // Optionally, you can use connection pools to increase query performance
//   pool: { min: 0, max: 80 },
// });

// Family Travel Tracker app functionality
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "neon",
  host: "ep-quiet-smoke-87307450.us-east-2.aws.neon.tech",
  database: "neondb",
  password: "Vcbek89xHhAz",
  port: 5432,
  ssl: true,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// keep track of the current user to show
let currentUser = 1;

// keep track of any error message to show
let errorMessage = "";

async function getUserResults() {
  const resultUsers = await db.query(
    "SELECT DISTINCT users.id, name, color FROM users LEFT JOIN visited_countries ON visited_countries.user_id = users.id ORDER BY id ASC",
  );

  const users = [];
  for (const row of resultUsers.rows) {
    users.push({
      id: row.id,
      name: row.name,
      color: row.color,
    });
  }

  return users;
}

async function getUserColor(id) {
  const resultUsers = await db.query(
    "SELECT DISTINCT users.id, name, color FROM users LEFT JOIN visited_countries ON visited_countries.user_id = users.id ORDER BY id ASC",
  );

  let defaultColor;
  for (const row of resultUsers.rows) {
    if (row.id === id) {
      defaultColor = row.color;
    }
  }

  return defaultColor;
}

async function getUserCountries(id) {
  const resultCountries = await db.query(
    "SELECT DISTINCT user_id, country_code FROM visited_countries RIGHT JOIN users ON users.id = visited_countries.user_id",
  );

  const countries = [];
  for (const row of resultCountries.rows) {
    if (row.user_id === id) {
      countries.push(row.country_code);
    }
  }

  return countries;
}

app.get("/", async (req, res) => {
  // get users data
  const users = await getUserResults();

  // get default user color
  const defaultColor = await getUserColor(currentUser);

  // get default user countries
  const defaultCountries = await getUserCountries(currentUser);

  // render variables to the page
  res.render("index.ejs", {
    users: users,
    user_id: currentUser,
    color: defaultColor,
    total: defaultCountries.length,
    countries: defaultCountries,
    error: errorMessage,
  });
});

app.post("/user", async (req, res) => {
  const userInput = req.body["user"];
  const addInput = req.body["add"];

  // get all users
  const users = await getUserResults();

  if (userInput !== undefined) {
    // update currentUser
    currentUser = parseInt(userInput);

    res.redirect("/");
  }

  if (addInput !== undefined) {
    res.render("new.ejs");
  }
});

app.post("/new", async (req, res) => {
  const name = req.body["name"];
  const color = req.body["color"];

  try {
    await db.query("INSERT INTO users (name, color) VALUES ($1, $2)", [
      name,
      color,
    ]);
  } catch (err) {
    res.render("new.ejs");
  }

  res.redirect("/");
});

app.post("/add", async (req, res) => {
  const countryInput = req.body["country"];
  const userInput = parseInt(req.body["user_id"]);
  let result;

  let countryCode;

  try {
    result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [countryInput],
    );
    const data = result.rows[0];
    countryCode = data.country_code;
    errorMessage = "";
  } catch (err) {
    errorMessage = "Country does not exist! Please try again";
    res.redirect("/");
  }

  if (result.rows.length !== 0) {
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, userInput],
      );
      errorMessage = "";
    } catch (err) {
      errorMessage = "Country has already been added!";
      res.redirect("/");
    }
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});