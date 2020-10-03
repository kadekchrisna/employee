const _ = require("lodash");

const EmployeeUseCase = require("../domain/employee").employeeUseCase;
const response = require("../infrastructure/config/response");

module.exports = class extends EmployeeUseCase {
  constructor(repo) {
    super();
    this.repo = repo;
  }
  async getAllEmployees() {
    try {
      const result = await this.repo.getAllEmployees();
      if (result.length < 1) {
        return response.success(200, "NOT_FOUND", []);
      }
      return response.success(200, "FOUND", result);
    } catch (e) {
      return response.failed(400, `FAILED_GET_ALL. ${e}`);
    }
  }
  async getEmployeeById(idEmployee) {
    try {
      if (_.isNaN(+idEmployee)) {
        return response.failed(400, "id must be a number");
      }
      const result = await this.repo.getEmployeeById(idEmployee);
      if (_.isEmpty(result)) {
        return response.success(200, "NOT_FOUND", {});
      }
      return response.success(200, "FOUND", result);
    } catch (e) {
      return response.failed(400, `FAILED_GET. ${e}`);
    }
  }
  async createEmployee(employee) {
    try {
      const result = await this.repo.createEmployee(employee);
      if (_.isEmpty(result)) {
        return response.failed(400, "FAILED_CREATE");
      }
      return response.success(201, "CREATED", result);
    } catch (e) {
      return response.failed(400, `FAILED_CREATE. ${e}`);
    }
  }
  async updateEmployeeById(employee) {
    try {
      if (_.isNaN(+employee.id)) {
        return response.failed(400, "id must be a number");
      }
      const check = await this.repo.getEmployeeById(employee.id);
      if (_.isEmpty(check)) {
        return response.failed(404, "NOT_FOUND");
      }
      const result = await this.repo.updateEmployeeById(employee);
      if (!result[1]) {
        return response.success(200, "UPDATED", employee);
      }
      return response.success(200, "UPDATED", employee);
    } catch (e) {
      return response.failed(400, `UPDATE_FAILED. ${e}`);
    }
  }
  async deleteEmployeeById(idEmployee) {
    try {
      if (_.isNaN(+idEmployee)) {
        return response.failed(400, "id must be a number");
      }
      const result = await this.repo.deleteEmployeeById(idEmployee);
      if (!result) {
        return response.failed(404, "NOT_FOUND");
      }
      return response.success(204, "DELETED", { id: idEmployee });
    } catch (e) {
      return response.failed(400, `DELETE_FAILED. ${e}`);
    }
  }
};
