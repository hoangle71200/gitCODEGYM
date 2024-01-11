// Bài 2: Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm. 
// Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.



function numberUp () {
    let a = parseInt(document.getElementById('numID').value);
    alert(a+1);
}