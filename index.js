const express = require("express");
const bodyParser = require("body-parser");

const Routes = require("./src/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Routes(app);

app.listen(port);
