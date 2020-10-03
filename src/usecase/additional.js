const _ = require("lodash");

const response = require("../infrastructure/config/response");
const AdditionalUseCase = require("../domain/additional").additionalUseCase;

module.exports = class extends AdditionalUseCase {
  reverse(character) {
    if (_.isEmpty(character)) {
      return response.failed(400, "character cannot empty");
    }
    return response.success(200, "SUCCESS", doReverse(character));
  }
  fibbonaci(seq) {
    if (_.isNaN(+seq)) {
      return response.failed(400, "sequence must be a number");
    }
    let fib = [0, 1];
    if (seq < 1) {
      return response.success(200, "SUCCESS", "0");
    } else if (seq < 2) {
      return response.success(200, "SUCCESS", "0 1");
    }
    let result = `0 1`;
    for (let i = 2; i <= seq; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      result += ` ${fib[i]}`;
    }
    return response.success(200, "SUCCESS", result);
  }
  combination(n, r) {
    if (_.isNaN(+n) || _.isNaN(+r)) {
      return response.failed(400, "n and r must be a number");
    }
    if (n <= r) {
      return response.failed(400, "N !<= R");
    }
    return response.success(200, "SUCCESS", calc(n) / (calc(r) * calc(n - r)));
  }
};

const doReverse = (character) => {
  if (character.length <= 1) return character;
  return doReverse(character.slice(1)) + character[0];
};

const calc = (num) => {
  if (num <= 1) return num;
  return calc(num - 1) * num;
};
