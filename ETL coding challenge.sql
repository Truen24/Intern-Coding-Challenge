DROP DATABASE IF EXISTS customers;

CREATE DATABASE IF NOT EXISTS customers;


USE customers;


DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
	created_at 	DATE 				NOT NULL,
    first_name 	VARCHAR(14) 		NOT NULL,
    last_name 	VARCHAR(16)			NOT NULL,
    email 		VARCHAR(255)		NOT NULL,
    longitude 	VARCHAR(255)		NOT NULL,
    latitude 	VARCHAR(255)		NOT NULL,
    ip		 	VARCHAR(255)		NOT NULL
);

LOAD DATA LOCAL INFILE 'C:\Users\adam\Documents\code-challenge\etl\data1.csv' INTO TABLE consumers FIELDS TERMINATED BY ',' ENCLOSED BY '"' IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE 'C:\Users\adam\Documents\code-challenge\etl\data2.csv' INTO TABLE consumers FIELDS TERMINATED BY ',' ENCLOSED BY '"' IGNORE 1 ROWS;
