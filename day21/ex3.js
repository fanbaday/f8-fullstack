const data = []

var regsiterData = function (name, password, email) {
    if (!name || !password || !email) {
      return 'nhập đầy đủ thông tin';
    }
    var newData = {
        name: name,
        password: password,
        email: email,
        role: 'user',
    }

    return data.push(newData);
    
}
regsiterData('Nguyen Van A', '123456', 'nguyenvana@email.com');
regsiterData('Nguyen Van B', '1234567', 'nguyenvanb@email.com');
console.log(`Data người dùng`,data);  


var login = function (name, password) {
    var loginData;
    data.map(function (user) {
        if (name === user.name && password === user.password) {
            loginData = {
                name: user.name,
                password: user.password,
                email: user.email,
                role: user.role,
            }
        }   
    });
    if (loginData) {
            console.log(loginData)
        } else {
            console.log(`name or pass ko đúng`); 
        }
}
login('Nguyen Van A', '123456')

