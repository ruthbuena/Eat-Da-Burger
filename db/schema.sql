-- Create and use following schema to create DB in MySQL
CREATE DATABASE burgers_db1;
USE burgers_db1;

-- Drop table if it already exists in DB
DROP TABLE IF EXISTS burgers_db1;

-- Create table for database
CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
