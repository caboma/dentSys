const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
const port = 8080 || 3001;

app.use(cors());


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
