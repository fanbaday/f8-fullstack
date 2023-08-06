var a = prompt("nhập số thứ 1:")
console.log(`số thứ 1: ${a}`);
var b = prompt("nhập số thứ 2:")
console.log(`số thứ 2: ${b}`);
var c = prompt("nhập số thứ 3:")
console.log(`số thứ 3: ${c}`);

if (a <= b && a <= c) {
    if (b <= c) {
        console.log(`sắp xếp: ${a}, ${b}, ${c}`);
    } else {
        console.log(`sắp xếp: ${a}, ${c}, ${b}`);
    }
}

if (b <= a && b <= c) {
    if (a <= c) {
        console.log(`sắp xếp: ${b}, ${a}, ${c}`);
    } else {
        console.log(`sắp xếp: ${b}, ${c}, ${a}`);
    }
}

if (c <= a && c <= b) {
    if (a <= b) {
        console.log(`sắp xếp: ${c}, ${a}, ${b}`);
    } else {
        console.log(`sắp xếp: ${c}, ${b}, ${a}`);
    }
}