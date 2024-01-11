// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.

let a = parseInt(prompt('Nhập số 1: '));
let b = parseInt(prompt('Nhập số 2: '));
let c = parseInt(prompt('Nhập số 3: '));

function isMin (a, b, c) {
    return Math.min(a,b,c);
}

alert(isMin(a,b,c))