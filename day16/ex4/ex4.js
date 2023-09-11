var number = prompt("Nhập số cần kiểm tra");

var prime = function(n) {
    if (n <= 1 || n % 1 !== 0) {
        return false
    }

    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

if (prime(number)) {
    document.write("Là số nguyên tố ");
} else {
    document.write("Ko là số nguyên tố ")
}