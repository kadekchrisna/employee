const additionalController = require("./additional");
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

test("should response OK for combination", () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    combination: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const AdditionalController = additionalController(usecase);

  const result = AdditionalController.combination(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});

test("should response OK for reverse", () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    reverse: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const AdditionalController = additionalController(usecase);

  const result = AdditionalController.reverse(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});

test("should response OK for fibbonaci", () => {
  const respMock = response.success(200, "OK", "OK");
  const usecase = {
    fibbonaci: () => {
      return respMock;
    },
  };
  let req = mockRequest();
  let res = mockResponse();
  const AdditionalController = additionalController(usecase);

  const result = AdditionalController.fibbonaci(req, res);
  expect(result.json).toBeCalledWith(respMock);
  expect(result.status).toBeCalledWith(respMock.status_code);
});
