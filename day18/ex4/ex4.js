var numbers = [1, 10, 9, 5, 6, 7, 2]
var newArr = []
numbers.sort(function (a, b) {
    return a - b
})
console.log(`mảng ban đầu: ${numbers}`);

var element = 11;

if (element > numbers[numbers.length - 1]) {
    numbers.push(element)
} else if (element < numbers[0]) {
    numbers.unshift(element)
} else {
    var indexAdd;
    for (var i = 0; i < numbers.length; i++) {
        if (element > numbers[i] && element < numbers[i+1]) {
            console.log(i);
            indexAdd = i + 1
            break;  
        }
    }
    console.log(numbers.slice(0, indexAdd));
    console.log([element]);
    console.log(numbers.slice(indexAdd));

    newArr = newArr.concat(numbers.slice(0, indexAdd), element, numbers.slice(indexAdd))
}



console.log(newArr);