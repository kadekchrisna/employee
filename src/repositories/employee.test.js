const eRepo = require("./employee");
const db = {
  employees: {
    findAll: () => {
      return "OK";
    },
  },
};
const EmployeeRepo = new eRepo(db);

test("should ewewe", async () => {
  const result = await EmployeeRepo.getAll();
  expect(result).toEqual("OK");
});
