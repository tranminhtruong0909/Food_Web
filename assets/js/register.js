
function isValidate() {
    const emailValidate = document.querySelector('.email_input');
    const nameValidate = document.querySelector('.name_input');
    const passValidate = document.querySelector('.pass_input');
    const passValidate1 = document.querySelector('.pass_input1');
    var nameRegex = "^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]+$";
    var emailRegex = "^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[A-Za-z]+$";
    var passRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$";
    if (!nameValidate.value.match(nameRegex)) {
        alert("Tên đăng nhập phải chứa ít nhất một chữ cái và một số");
    } else if (!emailValidate.value.match(emailRegex)) {
        alert("Email không hợp lệ");
    } else if (!passValidate.value.match(passRegex)) {
        alert("Mật khẩu phải chứa ít nhất một chữ cái viết thường, một chữ cái viết hoa, một số và một ký tự đặc biệt");
    } 
    else if(passValidate.value !== passValidate1.value){
        alert("Mật khẩu không khơp");
    }
    else {
        alert("Đăng ký tài khoản thành công");
    }
}
