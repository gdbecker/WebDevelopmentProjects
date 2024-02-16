// Travel Tracker app functionality
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// SQLite database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const { error } = require("console");

// SQLite database setup
const dbPromise = sqlite.open({
  filename: "tracker.db",
  driver: sqlite3.Database,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// keep track of any error message to show
let errorMessage = "";

async function checkVisisted() {
  const db = await dbPromise;
  const result = await db.all("SELECT country_code FROM visited_countries");

  let countries = [];
  result.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getCountries() {
  const db = await dbPromise;
  const result = await db.all("SELECT * FROM countries");
  return result;
}

// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    error: errorMessage,
  });
});

// INSERT a new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  let result;
  let countryCode;

  try {
    const db = await dbPromise;
    result = await db.all(
      "SELECT country_code FROM countries WHERE country_name = ?",
      [input],
    );
    const data = result[0];
    countryCode = data.country_code;
    errorMessage = "";
  } catch (err) {
    errorMessage = "Country does not exist! Please try again";
    res.redirect("/");
  }

  if (result.length !== 0) {
    try {
      const db = await dbPromise;
      await db.run("INSERT INTO visited_countries (country_code) VALUES (?)", [
        countryCode,
      ]);
    } catch (err) {
      errorMessage = "Country has already been added!";
      res.redirect("/");
    }

    // errorMessage = "";
    // res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
