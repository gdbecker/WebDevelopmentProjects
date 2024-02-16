DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS reviews;

CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  isbn VARCHAR(15) UNIQUE NOT NULL,
  url VARCHAR(100)
);

CREATE TABLE reviews (
  id INTEGER PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  entry TEXT
);

INSERT INTO books (isbn, url)
VALUES ('0765330423', 'https://covers.openlibrary.org/b/ISBN/0765330423-L.jpg'), ('0525557407', 'https://covers.openlibrary.org/b/ISBN/0525557407-L.jpg');

INSERT INTO reviews (book_id, entry)
VALUES (1, 'Amazing follow up to the og Mistborn trilogy!!'), (2, 'Powerful and moving story');