DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');