const employeeController = require("./employee");
const response = require("../infrastructure/config/response");

const mockRequest = () => {
  const req = {};
  req.body = jest.fn().mockReturnValue(req);
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test("should response OK for getEmployees", async () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    getAllEmployees: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const EmployeeController = employeeController(usecase);

  const result = await EmployeeController.getEmployees(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});

test("should response OK for getEmployeeById", async () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    getEmployeeById: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const EmployeeController = employeeController(usecase);

  const result = await EmployeeController.getEmployeeById(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});

test("should response OK for createEmployee", async () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    createEmployee: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const EmployeeController = employeeController(usecase);

  const result = await EmployeeController.createEmployee(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});

test("should response OK for updateEmployeeById", async () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    updateEmployeeById: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const EmployeeController = employeeController(usecase);

  const result = await EmployeeController.updateEmployeeById(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});

test("should response OK for deleteEmployeeById", async () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    deleteEmployeeById: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const EmployeeController = employeeController(usecase);

  const result = await EmployeeController.deleteEmployeeById(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});
