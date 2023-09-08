var price = 1000000000;

Number.prototype.getCurrency = function (unitCurrency) {
  return this.toLocaleString() + " " + unitCurrency;
};

console.log(price.getCurrency("$"));
