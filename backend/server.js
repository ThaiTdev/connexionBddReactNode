const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const app = express();

///////////////////////// initialisation de la dbb
// const sequelize = require("./src/db/sequelize");
//je passe la methode initDb a sequelize
// sequelize.initDb();
//////////////////////////

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 6000;

app.use(morgan("dev")).use(express.json()).use(bodyParser.json()).use(cors());

require("./src/routes/testBdd")(app);

app.listen(PORT, () => {
  console.log(`le server se trouve sur le port:${PORT}`);
});
