const mongoose = require("mongoose");

const connctDB = async () => {
  const conn = await mongoose.connect(process.env["MONGO_URI"]); // for replit
  // const conn = await mongoose.connect(process.env.MONGO_URI); // for local environment
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

mongoose.set("strictQuery", true);

module.exports = connctDB;
