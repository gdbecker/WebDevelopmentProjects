import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "neon",
  host: "ep-winter-glitter-77348297.us-east-2.aws.neon.tech",
  database: "neondb",
  password: "sEuA1gOntU4e",
  port: 5432,
  ssl: true,
});

db.connect();

// variable trackers
let errorMessage = "";

app.get("/", async (req, res) => {
  // date info
  const date = new Date();

  // get items from the database
  const queryBooks = await db.query("SELECT * FROM books");

  const queryReviews = await db.query("SELECT * FROM reviews");

  let books = [];
  let matchFound = false;
  for (let book of queryBooks.rows) {
    for (let review of queryReviews.rows) {
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
    await db.query("INSERT INTO books (isbn, url) VALUES ($1, $2)", [
      isbn,
      url,
    ]);

    let newBookId = await db.query("SELECT id FROM books WHERE isbn = $1", [
      isbn,
    ]);
    newBookId = newBookId.rows[0].id;

    // initialize a blank review entry for the book
    await db.query("INSERT INTO reviews (book_id, entry) VALUES ($1, $2)", [
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

  await db.query("DELETE FROM reviews WHERE book_id = $1", [bookId]);
  await db.query("DELETE FROM books WHERE id = $1", [bookId]);

  res.redirect("/");
});

app.post("/updateReview", async (req, res) => {
  const reviewId = req.body.updatedReviewId;
  const newEntry = req.body.updatedReviewEntry;

  await db.query("UPDATE reviews SET entry = $1 WHERE id = $2", [
    newEntry,
    reviewId,
  ]);

  res.redirect("/");
});

app.post("/deleteReview", async (req, res) => {
  const reviewId = req.body.deleteReviewId;

  await db.query("UPDATE reviews SET entry = $1 WHERE id = $2", ["", reviewId]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
