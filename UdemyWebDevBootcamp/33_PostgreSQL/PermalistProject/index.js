const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// SQLite database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

// SQLite database setup
const dbPromise = sqlite.open({
  filename: "items.db",
  driver: sqlite3.Database,
});

app.get("/", async (req, res) => {
  // date info
  const date = new Date();

  // get items from the database
  const db = await dbPromise;
  const itemsQuery = await db.all("SELECT * FROM items ORDER BY title ASC");
  let items = [];
  for (let row of itemsQuery) {
    items.push({
      id: row.id,
      title: row.title,
    });
  }

  res.render("index.ejs", {
    listTitle: date.toDateString(),
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const title = req.body.newItem;

  const db = await dbPromise;
  await db.run("INSERT INTO items (title) VALUES (?)", [title]);

  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const itemId = req.body.updatedItemId;
  const newTitle = req.body.updatedItemTitle;

  const db = await dbPromise;
  await db.run("UPDATE items SET title = ? WHERE id = ?", [
    newTitle,
    itemId,
  ]);

  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;

  const db = await dbPromise;
  await db.run("DELETE FROM items WHERE id = ?", [itemId]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
