

function kiemtra () {
    let soDien = parseInt(document.getElementById('sodienID').value);
    let thoidiem = document.getElementById('thoidiemID').value;
    if (soDien>0) {
       if (thoidiem === 'CAODIEM') {
        alert('Tổng tiền điện là: ' + (soDien*2844))
       } else if (thoidiem === 'THAPDIEM') {
        alert('Tổng tiền điện là: ' + (soDien*999))
       } else if (thoidiem === 'BINHTHUONG') {
        alert('Tổng tiền điện là: ' + (soDien*1544))
       }
    } else alert('Mời nhập lại')
       
}