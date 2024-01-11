// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, 
// hiển thị hộp thoại thông báo cho người dùng. 
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.

function outputNum () {
    let a = parseInt(prompt('Nhập số 1: '))
    let b = parseInt(prompt('Nhập số 2: '))

   if (a>b) {
    alert(a + '>' + b);
   } else if (a<=b) {
    alert(a+b);
   }
}

