import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "neon",
  host: "ep-dry-brook-00301663.us-east-2.aws.neon.tech",
  database: "neondb",
  password: "0fSkdjg7NqBh",
  port: 5432,
  ssl: true,
});

db.connect();

app.get("/", async (req, res) => {
  // date info
  const date = new Date();

  // get items from the database
  const itemsQuery = await db.query("SELECT * FROM items ORDER BY title ASC");
  let items = [];
  for (let row of itemsQuery.rows) {
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

  await db.query("INSERT INTO items (title) VALUES ($1)", [title]);

  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const itemId = req.body.updatedItemId;
  const newTitle = req.body.updatedItemTitle;

  await db.query("UPDATE items SET title = $1 WHERE id = $2", [
    newTitle,
    itemId,
  ]);

  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;

  await db.query("DELETE FROM items WHERE id = $1", [itemId]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
