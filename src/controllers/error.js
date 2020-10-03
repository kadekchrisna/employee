module.exports = () => {
  const errorHandler = (err, req, res, next) => {
    return res.status(500).json({ message: err });
  };
  const notFound = (req, res) => {
    return res.status(404).json({ message: "NOT_FOUND" });
  };
  return {
    errorHandler,
    notFound,
  };
};
