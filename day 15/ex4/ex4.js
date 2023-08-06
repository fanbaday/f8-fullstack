var a = prompt("nhập số thứ 1:")
console.log(`số thứ 1: ${a}`);
var b = prompt("nhập số thứ 2:")
console.log(`số thứ 2: ${b}`);

if (a > 0  && b > 0) {
    console.log(`${a} và ${b} cùng dấu `);
} else if (a < 0 && b < 0) {
    console.log(`${a} và ${b} cùng dấu `);
}else if (a == 0 || b == 0) {
    console.log("không xác định");
} else {
    console.log(`${a} và ${b} không cùng dấu `);
}


// var c = (((a > 0 && b > 0) || (a < 0 && b < 0) ) ? `${a} và ${b} cùng dấu` : `${a} và ${b} không cùng dấu`)
// console.log(`${c}`);