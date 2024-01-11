// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.

let a = parseInt(prompt('Nhập số: '));

function isDuong (x) {
    return x>0;
}

alert(isDuong(a))