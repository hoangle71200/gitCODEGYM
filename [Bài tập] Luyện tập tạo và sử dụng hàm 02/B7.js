// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.

let a = parseInt(prompt('Nhập số a: '));
let b = parseInt(prompt('Nhập số b: '));

function doiHaiSo (a, b) {
    temp = a; 
    a = b; 
    b = temp;
    return 'a =' + a + ',b =' + b;
}

alert(doiHaiSo(a, b))