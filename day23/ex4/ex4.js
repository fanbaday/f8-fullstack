var names = ["an", "tung", "tuan anh", "dang", "dung"];

Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var rs = callback(this[index], index, this);
      if (rs) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var result = names.filter2(function (value, index, arr) {
  return value === "an";
});

console.log(result);
