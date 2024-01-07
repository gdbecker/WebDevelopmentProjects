const path = require("path");

const express = require("express");

const cors = require("cors");

const port = process.env["PORT"]; // for replit
// const port = process.env.PORT || 5000; // for local environment

const connectDB = require("./config/db");
connectDB();

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Grab routes for ideas
const ideaRouter = require("./routes/ideas");
app.use("/api/ideas", ideaRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
