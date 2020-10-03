const eRepo = require("./employee");
const db = {
  employees: {
    findAll: () => {
      return "OK";
    },
    findOne: () => {
      return "OK";
    },
    create: () => {
      return "OK";
    },
    update: () => {
      return "OK";
    },
    destroy: () => {
      return "OK";
    },
  },
};
const EmployeeRepo = new eRepo(db);

test("should OK getAllEmployees", async () => {
  const result = await EmployeeRepo.getAllEmployees();
  expect(result).toEqual("OK");
});

test("should OK getAllEmployees", async () => {
  const result = await EmployeeRepo.getEmployeeById(1);
  expect(result).toEqual("OK");
});

test("should OK getAllEmployees", async () => {
  const result = await EmployeeRepo.createEmployee({});
  expect(result).toEqual("OK");
});

test("should OK getAllEmployees", async () => {
  const result = await EmployeeRepo.updateEmployeeById({ id: 2 });
  expect(result).toEqual("OK");
});

test("should OK getAllEmployees", async () => {
  const result = await EmployeeRepo.deleteEmployeeById({ id: 2 });
  expect(result).toEqual("OK");
});
