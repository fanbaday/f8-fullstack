var numbers = [1, 2, 3, 4, 5, 6];

var other = ["tuan anh", "js"];

Array.prototype.push2 = function (...value) {
  for (var i = 0; i < value.length; i++) {
    this[this.length] = value[i];
  }
  return this.length;
};

numbers.push2(other, 8, 10, 12);

console.log(numbers);
