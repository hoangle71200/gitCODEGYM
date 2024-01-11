// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.

let a = parseInt(prompt('Nhập ký tự: '));
function kiemTraKyTu (num) {
    let isNum = false;
    let arrNum = [0,1,2,3,4,5,6,7,8,9];
    for (let i=0; i<9; i++) {
        if (num === arrNum[i]){
            isNum = true;
            break;
        }
    }
    return isNum;
}
alert(kiemTraKyTu(a))