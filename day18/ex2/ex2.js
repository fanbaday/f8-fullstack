var numbers = [1, 4, 5, 7, 13, 15, 18];
// var số = [14, 1, 4, 6, ,8 ,12];

var isPrime = function (n) {
    if (n <= 1 || n % 1 !== 0) {
        return false;
    }

    for (var i = 2; i < n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

var total = 0;
var count = 0;
var avg;
for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
        console.log(`số nguyên tố là: ${numbers[i]}`);
        total = total + numbers[i];
        ++count;
    }
}

if (count > 0) {
    avg = total / count
    console.log(`có ${count} số nguyên tố`);
    console.log(`tổng bằng: ${total}`);
    console.log(`trung bình cộng ${avg}`);
} else {
    console.log(`ko có số nguyên tố `);
}
