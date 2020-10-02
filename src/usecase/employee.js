const EmployeeUseCase = require("../domain/employee").employeeUseCase;

module.exports = class extends EmployeeUseCase {
  constructor(repo) {
    super();
    this.repo = repo;
  }
  async getAll() {
    return this.repo.getAll();
  }
};
