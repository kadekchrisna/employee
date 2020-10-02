const db = require("../src/infrastructure/orm/sequelize/sequelize");
const eRepo = require("../src/repositories/employee");
const ucRepo = require("../src/usecase/employee");
const EmployeeController = require("../src/controllers/employee");

const EmployeeUseCase = new ucRepo(new eRepo(db));

module.exports = (r) => {
  r.use("/employee", EmployeeController(EmployeeUseCase).getEmployees);
};
