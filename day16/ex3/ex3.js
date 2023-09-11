// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

var n = prompt("nhập số n")
var total = 0;
for (var i = 1; i <= n; i++) {
    console.log(`${i}*${i + 1}`);
    total = total + i * (i +1);
}
document.write(` tổng S = ${total} `)