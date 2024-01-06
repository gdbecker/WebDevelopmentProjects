const express = require("express");

const port = process.env['PORT']; // for replit
// const port = process.env.PORT || 5000; // for local environment

const connectDB = require("./config/db");
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Grab routes for ideas
const ideaRouter = require("./routes/ideas");
app.use("/api/ideas", ideaRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
