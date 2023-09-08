var numbers = [0, 0, 1, 1 ,2 ,2 ,3 , 4,4 ,5, 6,6 ];
var newArr = [];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if(newArr.includes(numbers[i])) {
        continue;
    }
    newArr[newArr.length] = numbers[i];
} 

console.log(newArr);