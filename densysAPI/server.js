const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const pool = require("./data/db");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

//API Routes

app.get("/clients", async (req, res) => {
  try {
    const all_clients = await pool.query("SELECT * FROM clients");
    res.json(all_clients.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.query("SELECT * FROM clients WHERE id=$1", [id]);
    res.json(client.rows[0]);
  } catch (err) {
    console.error(err);
  }
});







app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
