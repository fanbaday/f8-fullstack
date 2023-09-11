var reverse = function (number) {
  if (number < 0 || number % 1 !== 0) {
    return false;
  }
  if (number < 11) {
    return `ko đổi chỗ được`;
  }
  var string = number.toString();
  var result = "";
  for (var i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  var final = +result;

  return final;
};
console.log(reverse(145));

// var string = "nguyen tuan anh";
// for (var i = string.length - 1; i > 0; i--) {
//   console.log(string[i]);
// }
