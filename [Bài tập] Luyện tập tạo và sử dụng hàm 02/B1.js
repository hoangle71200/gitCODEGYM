// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

let a = parseInt(prompt('Nhập số: '))
 
function tinhBinhPhuong(num) {
    return num*num;
}

console.log(tinhBinhPhuong(a))