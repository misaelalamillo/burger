USE ke7n5bmk0gucdzbr;
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);