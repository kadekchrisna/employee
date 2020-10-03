const r = require("express").Router();
const EmployeeRoute = require("./employee");
const AdditionalRoute = require("./additional");

r.use("/", EmployeeRoute);
r.use("/", AdditionalRoute);

module.exports = r;
