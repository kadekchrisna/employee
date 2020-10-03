const additionalUsecase = require("./additional");
const response = require("../infrastructure/config/response");

test("should successfully reverse characters", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.reverse("ABC");
  expect(result).toEqual(response.success(200, "SUCCESS", "CBA"));
});
test("should failed reverse characters", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.reverse("");
  expect(result).toEqual(response.failed(400, "character cannot empty"));
});

test("should successfully printing fibbonaci sequence", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.fibbonaci(0);
  expect(result).toEqual(response.success(200, "SUCCESS", "0"));
});

test("should successfully printing fibbonaci sequence 1", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.fibbonaci(1);
  expect(result).toEqual(response.success(200, "SUCCESS", "0 1"));
});

test("should successfully printing fibbonaci sequence", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.fibbonaci(4);
  expect(result).toEqual(response.success(200, "SUCCESS", "0 1 1 2 3"));
});

test("should failed printing fibbonaci sequence", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.fibbonaci("asda");
  expect(result).toEqual(response.failed(400, "sequence must be a number"));
});

test("should successfully calculate combination", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.combination(4, 2);
  expect(result).toEqual(response.success(200, "SUCCESS", 6));
});

test("should failed calculate combination not a number", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.combination("asd", 2);
  expect(result).toEqual(response.failed(400, "n and r must be a number"));
});

test("should failed calculate combination n <= r", () => {
  const AdditionalUseCase = new additionalUsecase();
  const result = AdditionalUseCase.combination(1, 2);
  expect(result).toEqual(response.failed(400, "N !<= R"));
});
