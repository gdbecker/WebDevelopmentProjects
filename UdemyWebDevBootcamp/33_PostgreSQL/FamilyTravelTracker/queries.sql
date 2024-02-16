DROP TABLE IF EXISTS visited_countries;
DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(15) UNIQUE NOT NULL,
  color VARCHAR(15)
);

CREATE TABLE countries (
  id INTEGER PRIMARY KEY,
  country_code VARCHAR(5) NOT NULL,
  country_name VARCHAR(50) NOT NULL
);

CREATE TABLE visited_countries (
id INTEGER PRIMARY KEY,
country_code CHAR(2) NOT NULL,
user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (name, color)
VALUES ('Angela', 'teal'), ('Jack', 'powderblue');

INSERT INTO visited_countries (country_code, user_id)
VALUES ('FR', 1), ('GB', 1), ('CA', 2), ('FR', 2 );