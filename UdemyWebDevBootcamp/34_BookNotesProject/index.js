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
  filename: "booknotes.db",
  driver: sqlite3.Database,
});

// variable trackers
let errorMessage = "";

app.get("/", async (req, res) => {
  // date info
  const date = new Date();

  // get items from the database
  const db = await dbPromise;
  const queryBooks = await db.all(`SELECT * FROM books`);
  const queryReviews = await db.all("SELECT * FROM reviews");

  let books = [];
  let matchFound = false;
  console.log(queryBooks);
  console.log(queryReviews);
  for (let book of queryBooks) {
    for (let review of queryReviews) {
      if (book.id === review.book_id) {
        books.push({
          id: book.id,
          isbn: book.isbn,
          url: book.url,
          review: {
            id: review.id,
            entry: review.entry,
          },
        });
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      books.push({
        id: book.id,
        isbn: book.isbn,
        url: book.url,
        review: {
          id: null,
          entry: null,
        },
      });
    }

    matchFound = false;
  }

  res.render("index.ejs", {
    books: books,
    error: errorMessage,
  });

  errorMessage = "";
});

app.post("/addBook", async (req, res) => {
  const isbn = req.body.newBook;
  const url = `https://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;

  try {
    const db = await dbPromise;
    await db.run(`INSERT INTO books (isbn, url) VALUES (?, ?)`, [isbn, url]);

    let newBookId = await db.all("SELECT id FROM books WHERE isbn = ?", [isbn]);
    newBookId = newBookId[0].id;

    // initialize a blank review entry for the book
    await db.run("INSERT INTO reviews (book_id, entry) VALUES (?, ?)", [
      newBookId,
      "Add an entry!",
    ]);
  } catch (err) {
    errorMessage = "Book already added!";
  }

  res.redirect("/");
});

app.post("/deleteBook", async (req, res) => {
  const bookId = req.body.deleteBookId;

  const db = await dbPromise;
  await db.run("DELETE FROM reviews WHERE book_id = ?", [bookId]);
  await db.run("DELETE FROM books WHERE id = ?", [bookId]);

  res.redirect("/");
});

app.post("/updateReview", async (req, res) => {
  const reviewId = req.body.updatedReviewId;
  const newEntry = req.body.updatedReviewEntry;

  const db = await dbPromise;
  await db.run("UPDATE reviews SET entry = ? WHERE id = ?", [
    newEntry,
    reviewId,
  ]);

  res.redirect("/");
});

app.post("/deleteReview", async (req, res) => {
  const reviewId = req.body.deleteReviewId;

  const db = await dbPromise;
  await db.run("UPDATE reviews SET entry = ? WHERE id = ?", ["", reviewId]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
