var getTotal = function (...args) {
  var total = 0;
  for (var value of args) {
    if (typeof value === "number") {
      total = total + value;
    } else {
      return `${value} ko phải là số`;
    }
  }
  return total;
};

console.log(getTotal(5, 6, 7, 8, 9));
