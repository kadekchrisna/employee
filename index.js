require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const Routes = require("./src/routers/routes");
const ErrorlController = require("./src/controllers/error");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(ErrorlController().errorHandler);

app.use("/api", Routes);
app.use(ErrorlController().notFound);

app.listen(port);
