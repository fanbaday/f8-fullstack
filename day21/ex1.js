/*
Yêu cầu: Viết hàm getError(field) có tham số truyền vào là field tương ứng với nhóm cần lấy lỗi. Tuy nhiên, chỉ trả về 1 chuỗi là lỗi đầu tiên tìm được(lỗi đầu tiên đúng) của 1 nhóm

Ví dụ:

getError('name') //Vui lòng nhập họ tên
getError('email') //Định dạng email không hợp lệ
*/

// console.log(errors.name);

// console.log(errors.email);
//  console.log(Object.entries(errors['email']));

var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}



// function getError(field) {
//     var errorType = Object.values(errors[field]);
//     console.log(errorType);
//     return errorType.length > 0 ? errorType[0] : "k có lỗi";
//   }
//   console.log(getError("email"));

var getError = function (field) {
    for (var key in errors) {   
        if (field === key) {
            console.log(errors[key].required);
        } else {
            continue
        }
   }
}


getError('password')

// var getError = function (field) {
//     for (var key in errors[field]) {
//         // console.log(key);
//         return errors[field][key];
//     }
// };
// console.log(getError("email"));