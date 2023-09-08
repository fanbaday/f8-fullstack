var numbers = [-1000, -20, -70, 18, 91, -133, 24];
var max = numbers[0];
var min = numbers[0];

var maxIn;
var minIn;
for (var i = 0; i < numbers.length; i++) {
    if (max >= numbers[i]) {
        max = numbers[i];
        maxIn = i;
    }

    if (min <= numbers[i]) {
        min = numbers[i];
        minIn = i;
    }
}

console.log(`Min = ${min} - vị trí: ${minIn}`);
console.log(`Max = ${max} - vị trí: ${maxIn}`);