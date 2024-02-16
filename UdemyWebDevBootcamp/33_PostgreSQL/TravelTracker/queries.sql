DROP TABLE IF EXISTS visited_countries;
DROP TABLE IF EXISTS countries;

CREATE TABLE countries (
  id INTEGER PRIMARY KEY,
  country_code VARCHAR(5) NOT NULL,
  country_name VARCHAR(50) NOT NULL
);

CREATE TABLE visited_countries (
  id INTEGER PRIMARY KEY,
  country_code CHAR(2) NOT NULL UNIQUE
);

INSERT INTO visited_countries (country_code)
VALUES ('FR'), ('GB'), ('CA');