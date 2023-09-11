var a = prompt("nhập số:");
var output = ""
for (var i = 1; i <= a; i++) {
    for (var j = 1; j <= i; j++) {
        output = output + "*"
    }
    output = output + "</br>"
}

document.write(output)
