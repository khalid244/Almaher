const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Almaher application." });
});

require("./app/routes/quran.routes.js")(app);

// set port, listen for requests
const port = 9000
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});




