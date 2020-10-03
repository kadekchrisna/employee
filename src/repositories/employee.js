const db = require("../infrastructure/orm/sequelize/sequelize");

const EmployeeRepository = require("../domain/employee").employeeRepository;

module.exports = class extends EmployeeRepository {
  constructor(db) {
    super();
    this.db = db;
  }
  async getAllEmployees() {
    return this.db.employees.findAll();
  }
  async getEmployeeById(idEmployee) {
    return this.db.employees.findOne({
      where: {
        id: idEmployee,
      },
    });
  }
  async createEmployee(employee) {
    return this.db.employees.create(employee);
  }
  async updateEmployeeById(employee) {
    return this.db.employees.update(employee, {
      where: {
        id: employee.id,
      },
      returning: true,
    });
  }
  async deleteEmployeeById(idEmployee) {
    return this.db.employees.destroy({
      where: {
        id: idEmployee,
      },
    });
  }
};
