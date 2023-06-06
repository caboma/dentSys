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
  user: "omarcabatbat",
  host: "localhost",
  database: "dentsys",
  password: "dentsys",
  port: "5432",
};

const client = new Client(config);

client.connect(() => {
  console.log("connected to database");
});

module.exports = client;
