var arrA = [1, 1, 2, 2, 3, 3, 4]; // [1, 2, 3, 4]
var arrB = [2, 2, 2, 4, 4, 4, 6, 8, 7, 7, 7, 7]; // [2, 4, 6, 7, 8]

var newArrA = arrA.filter(function (value, index) {
  return arrA.indexOf(value) === index;
});

var newArrB = arrB.filter(function (value, index) {
  return arrB.indexOf(value) === index;
});
console.log(newArrA);
console.log(newArrB);

var result = newArrA.reduce(function (prev, current) {
  if (newArrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(result);

console.group("bài 2");

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(arr.flat(Infinity));

console.group("bài 3");
