require('dotenv').config();
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

//Routes for Clients
//Route to get a list of all clients
app.get("/clients", async (req, res) => {
  try {
    const all_clients = await pool.query("SELECT * FROM clients");
    res.json(all_clients.rows);
  } catch (err) {
    console.error(err);
  }
});

//Route to get a specific client
app.get("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.query("SELECT * FROM clients WHERE id=$1", [id]);
    res.json(client.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

//Route to add new client information
app.post("/clients", async (req, res) => {
  try {
    const {
      last_name,
      first_name,
      gender,
      dob,
      address,
      telephone,
      email,
      emergencyname,
      emergencytelephone } = req.body;

    const newClient = await pool.query("INSERT INTO clients (last_name, first_name, gender, dob, address, telephone, email, emergencyname, emergencytelephone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)", [last_name, first_name, gender, dob, address, telephone, email, emergencyname, emergencytelephone]);

    res.json(newClient.rows[0])

  } catch (err) {
    console.error(err);
  }
})
//Route to UPDATE an existing client information

app.put("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      last_name,
      first_name,
      gender,
      dob,
      address,
      telephone,
      email,
      emergencyname,
      emergencytelephone } = req.body;

    const updateClient = await pool.query("UPDATE clients SET last_name = $1, first_name= $2, gender = $3, dob = $4, address = $5, telephone = $6, email = $7, emergencyname = $8, emergencytelephone = $9 WHERE id = $10", [last_name, first_name, gender, dob, address, telephone, email, emergencyname, emergencytelephone, id]);

    res.json("Client information was successfully updated");
  } catch (err) {
    console.error(err);
  }
})

//Route to DELETE an existing client record

app.delete("/clients/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteClient = await pool.query("DELETE FROM clients WHERE id = $1", [id])

    res.json("Client was successfully deleted!");
  } catch (err) {
    console.error(err);
  }
})

//End of Clients routes

//Routes for Appointments

//End of Appointments routes


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
