// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được

let a = parseInt(prompt('Nhập bán kính: '));

function tinhS (r) {
    return 3.14*r*r;
}

function tinhC (r) {
    return 3.14*2*r;
}

console.log('Diện tích:' + tinhS(a));
console.log('Chu vi:' + tinhC(a));
