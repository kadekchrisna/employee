module.exports = (usecase) => {
  const getEmployees = async (req, res) => {
    const result = await usecase.getAll();
    res.json(result);
  };
  return {
    getEmployees,
  };
};
