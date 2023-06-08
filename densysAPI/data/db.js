// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "omarcabatbat",
//   host: "localhost",
//   database: "dentsys",
//   password: "postgres",
//   port: "5432",
// })

// module.exports = pool;

const pg = require("pg");
const Client = pg.Client;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432
};

const client = new Client(config);

client.connect(() => {
  console.log("connected to database");
});

module.exports = client;
