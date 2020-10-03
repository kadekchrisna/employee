const r = require("express").Router();

const db = require("../infrastructure/orm/sequelize/sequelize");
const eRepo = require("../repositories/employee");
const ucRepo = require("../usecase/employee");
const EmployeeController = require("../controllers/employee");

const EmployeeUseCase = new ucRepo(new eRepo(db));

r.get("/employees", EmployeeController(EmployeeUseCase).getEmployees);
r.get("/employees/:id", EmployeeController(EmployeeUseCase).getEmployeeById);
r.post("/employees", EmployeeController(EmployeeUseCase).createEmployee);
r.put("/employees/:id", EmployeeController(EmployeeUseCase).updateEmployeeById);
r.delete(
  "/employees/:id",
  EmployeeController(EmployeeUseCase).deleteEmployeeById
);

module.exports = r;
