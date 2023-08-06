var a = prompt("nhập số thứ 1:")
console.log(`số thứ 1: ${a}`);
var b = prompt("nhập số thứ 2:")
console.log(`số thứ 2: ${b}`);
var c = prompt("nhập số thứ 3:")
console.log(`số thứ 3: ${c}`);


if (a <= b && a <= c) {
    if (b <= c) {
        console.log(`số lớn nhất là: ${c}`);
    } else {
        console.log(`số lớn nhất là: ${b}`);
    }
}

if (b <= a && b <= c) {
    if (a <= c) {
        console.log(`số lớn nhất là: ${c}`);
    } else {
        console.log(`số lớn nhất là: ${a}`);
    }
}

if (c <= a && c <= b) {
    if (a <= b) {
        console.log(`số lớn nhất là: ${b}`);
    } else {
        console.log(`số lớn nhất là: ${a}`);
    }
}