

function kiemtra () {
    let thuNhap = parseInt(document.getElementById('thunhapID').value);
    let phuThuoc = parseInt(document.getElementById('phuthuocID').value);
    if (thuNhap>=10000000) {
       alert ('Thuế phải đóng là: ' + (thuNhap*0.3/phuThuoc))
    } else if (thuNhap>=5000000) {
        alert('Thuế phải đóng là: ' + (thuNhap*0.2/phuThuoc))
        } else if (thuNhap>=1000000) {
            alert('Thuế phải đóng là: ' + (thuNhap*0.1/phuThuoc))
        } else alert ('Không phải đóng thuế')
}