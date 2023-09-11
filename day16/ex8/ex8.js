// S = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n

var n = 5;

var getTotal = function (n) {
  //   console.log(n);
  if (n === 1) {
    return 1;
  }

  return 1 / n + getTotal(n - 1);
};

console.log(getTotal(n));
