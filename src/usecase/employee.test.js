const employeeUsecase = require("./employee");
const response = require("../infrastructure/config/response");

const repo = {
  getAllEmployees: () => {
    return ["OK"];
  },
  getEmployeeById: () => {
    return "OK";
  },
  createEmployee: () => {
    return "OK";
  },
  updateEmployeeById: () => {
    return "OK";
  },
  deleteEmployeeById: () => {
    return "OK";
  },
};

test("should successfully getAllEmployees found", async () => {
  const repo = {
    getAllEmployees: () => {
      return ["OK"];
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.getAllEmployees();
  expect(result).toEqual(response.success(200, "FOUND", ["OK"]));
});

test("should success getAllEmployees not found", async () => {
  const repo = {
    getAllEmployees: () => {
      return [];
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.getAllEmployees();
  expect(result).toEqual(response.success(200, "NOT_FOUND", []));
});

test("should success getAllEmployees error", async () => {
  const repo = {
    getAllEmployees: () => {
      throw Error("Error");
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.getAllEmployees();
  expect(result).toEqual(response.failed(400, "FAILED_GET_ALL. Error: Error"));
});

test("should successfully getEmployeeById found", async () => {
  const repo = {
    getEmployeeById: () => {
      return "OK";
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.getEmployeeById(1);
  expect(result).toEqual(response.success(200, "FOUND", "OK"));
});

test("should successfully getEmployeeById not found", async () => {
  const repo = {
    getEmployeeById: () => {
      return {};
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.getEmployeeById(1);
  expect(result).toEqual(response.success(200, "NOT_FOUND", {}));
});

test("should failed getEmployeeById not a number", async () => {
  const repo = {
    getEmployeeById: () => {
      return {};
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.getEmployeeById("asd");
  expect(result).toEqual(response.failed(400, "id must be a number"));
});

test("should failed getEmployeeById error", async () => {
  const repo = {
    getEmployeeById: () => {
      throw Error("Error");
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.getEmployeeById(1);
  expect(result).toEqual(response.failed(400, "FAILED_GET. Error: Error"));
});

test("should successfully createEmployee", async () => {
  const repo = {
    createEmployee: () => {
      return { id: 1 };
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.createEmployee({});
  expect(result).toEqual(response.success(201, "CREATED", { id: 1 }));
});

test("should failed createEmployee failed create", async () => {
  const repo = {
    createEmployee: () => {
      return {};
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.createEmployee({});
  expect(result).toEqual(response.failed(400, "FAILED_CREATE"));
});

test("should failed createEmployee error", async () => {
  const repo = {
    createEmployee: () => {
      throw Error("Error");
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.createEmployee({});
  expect(result).toEqual(response.failed(400, "FAILED_CREATE. Error: Error"));
});

test("should successfully updateEmployeeById", async () => {
  const repo = {
    getEmployeeById: () => {
      return { id: 1 };
    },
    updateEmployeeById: () => {
      return [1, 1];
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.updateEmployeeById({ id: 1 });
  expect(result).toEqual(response.success(200, "UPDATED", { id: 1 }));
});

test("should successfully updateEmployeeById nothing changed", async () => {
  const repo = {
    getEmployeeById: () => {
      return { id: 1 };
    },
    updateEmployeeById: () => {
      return [1, 0];
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.updateEmployeeById({ id: 1 });
  expect(result).toEqual(response.success(200, "UPDATED", { id: 1 }));
});

test("should failed updateEmployeeById id not found", async () => {
  const repo = {
    getEmployeeById: () => {
      return {};
    },
    updateEmployeeById: () => {
      return [1, 0];
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.updateEmployeeById({ id: 1 });
  expect(result).toEqual(response.failed(404, "NOT_FOUND"));
});

test("should failed updateEmployeeById id is not a number", async () => {
  const repo = {
    getEmployeeById: () => {
      return {};
    },
    updateEmployeeById: () => {
      return [1, 0];
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.updateEmployeeById({ id: "adasdas" });
  expect(result).toEqual(response.failed(400, "id must be a number"));
});

test("should failed updateEmployeeById error", async () => {
  const repo = {
    getEmployeeById: () => {
      throw Error("Error");
    },
    updateEmployeeById: () => {
      return [1, 0];
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.updateEmployeeById({ id: 1 });
  expect(result).toEqual(response.failed(400, "UPDATE_FAILED. Error: Error"));
});

test("should successfully deleteEmployeeById", async () => {
  const repo = {
    deleteEmployeeById: () => {
      return 1;
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.deleteEmployeeById(1);
  expect(result).toEqual(response.success(204, "DELETED", { id: 1 }));
});

test("should failed deleteEmployeeById id not a number", async () => {
  const repo = {
    deleteEmployeeById: () => {
      return 1;
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.deleteEmployeeById("asdas");
  expect(result).toEqual(response.failed(400, "id must be a number"));
});

test("should failed deleteEmployeeById id not found", async () => {
  const repo = {
    deleteEmployeeById: () => {
      return 0;
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.deleteEmployeeById(1);
  expect(result).toEqual(response.failed(404, "NOT_FOUND"));
});

test("should failed deleteEmployeeById error", async () => {
  const repo = {
    deleteEmployeeById: () => {
      throw Error("Error");
    },
  };
  const EmployeeUseCase = new employeeUsecase(repo);
  const result = await EmployeeUseCase.deleteEmployeeById(1);
  expect(result).toEqual(response.failed(400, `DELETE_FAILED. Error: Error`));
});
