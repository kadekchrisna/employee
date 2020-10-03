module.exports = (usecase) => {
  const getEmployees = async (req, res) => {
    const result = await usecase.getAllEmployees();
    return res.status(result.status_code).json(result);
  };
  const getEmployeeById = async (req, res) => {
    const result = await usecase.getEmployeeById(+req.params.id);
    return res.status(result.status_code).json(result);
  };
  const createEmployee = async (req, res) => {
    const result = await usecase.createEmployee(req.body);
    return res.status(result.status_code).json(result);
  };
  const updateEmployeeById = async (req, res) => {
    const result = await usecase.updateEmployeeById({
      ...req.body,
      ...{ id: +req.params.id },
    });
    return res.status(result.status_code).json(result);
  };
  const deleteEmployeeById = async (req, res) => {
    const result = await usecase.deleteEmployeeById(+req.params.id);
    return res.status(result.status_code).json(result);
  };
  return {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById,
  };
};
