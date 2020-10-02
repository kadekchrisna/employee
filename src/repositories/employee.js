const db = require("../infrastructure/orm/sequelize/sequelize");

const EmployeeRepository = require("../domain/employee").employeeRepository;

module.exports = class extends EmployeeRepository {
  constructor(db) {
    super();
    this.db = db;
  }
  async getAll() {
    return this.db.employees.findAll();
  }
};
