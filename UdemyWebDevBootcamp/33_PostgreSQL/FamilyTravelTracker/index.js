// Family Travel Tracker app functionality
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// SQLite database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

// SQLite database setup
const dbPromise = sqlite.open({
  filename: "tracker.db",
  driver: sqlite3.Database,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// keep track of the current user to show
let currentUser = 1;

// keep track of any error message to show
let errorMessage = "";

async function getUserResults() {
  const db = await dbPromise;
  const resultUsers = await db.all(
    "SELECT DISTINCT users.id, name, color FROM users LEFT JOIN visited_countries ON visited_countries.user_id = users.id ORDER BY users.id ASC",
  );

  const users = [];
  for (const row of resultUsers) {
    users.push({
      id: row.id,
      name: row.name,
      color: row.color,
    });
  }

  return users;
}

async function getUserColor(id) {
  const db = await dbPromise;
  const resultUsers = await db.all(
    "SELECT DISTINCT users.id, name, color FROM users LEFT JOIN visited_countries ON visited_countries.user_id = users.id ORDER BY users.id ASC",
  );

  let defaultColor;
  for (const row of resultUsers) {
    if (row.id === id) {
      defaultColor = row.color;
    }
  }

  return defaultColor;
}

async function getUserCountries(id) {
  const db = await dbPromise;
  const resultCountries = await db.all(
    "SELECT DISTINCT user_id, country_code FROM visited_countries RIGHT JOIN users ON users.id = visited_countries.user_id",
  );

  const countries = [];
  for (const row of resultCountries) {
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
    
    // get user color for id = userInput
    const defaultColor = await getUserColor(currentUser);

    // get user countries for id = userInput
    const defaultCountries = await getUserCountries(currentUser);

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
    const db = await dbPromise;
    await db.run("INSERT INTO users (name, color) VALUES (?, ?)", [
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

  // get all users
  const users = await getUserResults();

  // get user color for id = userInput
  const defaultColor = await getUserColor(userInput);

  // get user countries for id = userInput
  const defaultCountries = await getUserCountries(userInput);

  let countryCode;

  try {
    const db = await dbPromise;
    result = await db.all(
      "SELECT country_code FROM countries WHERE country_name = ?",
      [countryInput],
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
      await db.run(
        "INSERT INTO visited_countries (country_code, user_id) VALUES (?, ?)",
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
