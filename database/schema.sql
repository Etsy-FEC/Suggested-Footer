DROP DATABASE IF EXISTS etsy_suggested;

CREATE DATABASE etsy_suggested;

USE etsy_suggested;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  listing_id INT NOT NULL,
  title VARCHAR(255),
  company_name VARCHAR(255),
  price VARCHAR(255),
  creation_tsz INT,
  imageURL text,
  category INT NOT NULL
);