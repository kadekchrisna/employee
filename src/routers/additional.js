const r = require("express").Router();

const ucRepo = require("../usecase/additional");
const AdditionalController = require("../controllers/additional");

const AdditionalUseCase = new ucRepo();

r.post("/reverse", AdditionalController(AdditionalUseCase).reverse);
r.post("/fibbonaci", AdditionalController(AdditionalUseCase).fibbonaci);
r.post("/combination", AdditionalController(AdditionalUseCase).combination);

module.exports = r;
