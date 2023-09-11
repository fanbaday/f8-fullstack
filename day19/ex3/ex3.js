var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
if (Array.isArray(arr)) {
  arr = arr.flat(Infinity);
  var newArr = arr.reduce(function (prev, current) {
    var type = typeof current;
    if (!prev[type]) {
      prev[type] = [];
    }

    prev[type].push(current);
    return prev;
  }, []);

  var result = [];
  for (var index in newArr) {
    result.push(newArr[index]);
  }
  console.log(result);
}
