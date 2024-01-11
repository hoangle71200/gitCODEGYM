// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.

let arrStar = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let arrStar2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function isStar () {
    let iStar = prompt('Nhập tên chòm sao: ');
    let count = 0;
    for (let i=0; i<arrStar.length; i++) {
        if (iStar === arrStar[i]) {
            count++;
            document.getElementById('outputID').innerHTML = arrStar2[i];
            break;
        }
    }
    if(count == 0) document.getElementById('outputID').innerHTML = 'Không có chòm sao';
}
