var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
  
var result = customers;
// console.log(result);
result.sort(function (a, b) {
    return a.age - b.age;
})

result.forEach(function (customer) {
    var names = customer.name.split(' ')
    var shortName = names[0] + ' ' + names[names.length - 1]
    // console.log(shortName);
    customer.shortName = shortName
    // console.log(customer);
})

console.log(result);