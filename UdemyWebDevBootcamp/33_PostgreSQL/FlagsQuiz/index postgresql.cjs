// importing csv data, comment out when done
// const fs = require("fs");
// const csvParser = require("csv-parser");

// import csv data: flags
// comment out when done
// const flagsData = [];

// fs.createReadStream("./flags.csv")
//   .pipe(csvParser())
//   .on("data", (data) => {
//     flagsData.push(data);
//   })
//   .on("end", async () => {
//     // console.log(capitalsData);
//     for (const flag of flagsData) {
//       // insert flag into flags table
//       await knex("flags").insert({
//         id: flag.id,
//         name: flag.name,
//         flag: flag.flag,
//       });
//     }
//   });

// connect to postgres database
// const knex = require("knex")({
//   // We are using PostgreSQL
//   client: "postgres",
//   // Use the `DATABASE_URL` environment variable we provide to connect to the Database
//   // It is included in your Replit environment automatically (no need to set it up)
//   connection: process.env.DATABASE_URL,

//   // Optionally, you can use connection pools to increase query performance
//   pool: { min: 0, max: 80 },
// });

// making the flags quiz app
const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");

const db = new pg.Client({
  user: "neon",
  host: "ep-throbbing-voice-42570132.us-east-2.aws.neon.tech",
  database: "neondb",
  password: "AtW35LiadfkJ",
  port: 5432,
  ssl: true,
});

const app = express();
const port = 3000;

db.connect();

let quiz = [];
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
