const errorHandler = require("./error");

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

test("should return 500 error", () => {
  let req = mockRequest();
  let res = mockResponse();
  const result = errorHandler().errorHandler(null, req, res);
  expect(result.status).toBeCalledWith(500);
});

test("should return 404 error", () => {
  let req = mockRequest();
  let res = mockResponse();
  const result = errorHandler().notFound(req, res);
  expect(result.status).toBeCalledWith(404);
});
