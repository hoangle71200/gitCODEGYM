// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

let a = parseInt(prompt('Nhập số: '))

function tinhGiaiThua (num) {
    let giaithua = 1;
    for (let i=2; i<=num; i++) {
        giaithua = giaithua*i;
    }
    return giaithua;
}

if (a<=0) alert('Nhập số dương')
else alert(tinhGiaiThua(a))