
function kiemtra () {
    let tien = parseInt(document.getElementById('tienID').value);
    if (tien>=1000000) alert('Điểm thưởng là: ' + (tien * 0.05) + 'đ')
    else if (tien>=500000) alert('Điểm thưởng là: ' + (tien * 0.01) + 'đ')
    else if (tien>=100000) alert('Điểm thưởng là: ' + (tien * 0.005) + 'đ')
    else if (tien>=50000) alert('Điểm thưởng là: ' + (tien * 0.001) + 'đ')
    else if (tien >=0) alert('Không có điểm thưởng')
    else ('Mời nhập lại')
} 
