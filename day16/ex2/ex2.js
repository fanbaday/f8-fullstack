var km = prompt("nhập số km");
var price1 = 15000;
var price2 = 13500;
var price3 = 11000;

var discount = 10;
var total = 0
if (km <= 1) {
    total = total + price1;
} else if (km <= 5) {
    total = price1 * 1 + (km - 1) * price2;
} else {
    total = price1 * 1 + (5 - 1) * price2 + (km - 5) * price3
}

if (km > 120) {
    total = (price1 * 1 + (5 - 1) * price2 + (km - 5) * price3) * (100 - discount)/100
}


document.write(` số tiền cần tra khi đi ${km}km là: ${total}`)