DROP TABLE IF EXISTS clients CASCADE;
CREATE TABLE clients(
  id SERIAL PRIMARY KEY NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  dob date,
  address VARCHAR(255) NOT NULL,
  telephone VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  emergencyname VARCHAR(255),
  emergencytelephone VARCHAR(255)
);