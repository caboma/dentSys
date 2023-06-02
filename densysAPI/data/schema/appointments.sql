DROP TABLE IF EXISTS appointments CASCADE;
CREATE TABLE appointments(
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  date date,
  start_time time,
  end_time time
);