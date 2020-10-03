module.exports = (usecase) => {
  const reverse = (req, res) => {
    const result = usecase.reverse(req.body.character);
    return res.status(result.status_code).json(result);
  };
  const fibbonaci = (req, res) => {
    const result = usecase.fibbonaci(req.body.sequence);
    return res.status(result.status_code).json(result);
  };
  const combination = (req, res) => {
    const result = usecase.combination(req.body.n, req.body.r);
    return res.status(result.status_code).json(result);
  };
  return {
    reverse,
    fibbonaci,
    combination,
  };
};
