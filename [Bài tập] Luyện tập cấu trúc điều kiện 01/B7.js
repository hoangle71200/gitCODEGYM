

function kiemtra () {
    let gio = parseInt(document.getElementById('gioID').value);
    let phut = parseInt(document.getElementById('phutID').value);
    let giay = parseInt(document.getElementById('giayID').value);
    let tong = gio*3600 + phut*60 + giay;
    let tiencuoc = tong * 55;
    // tiền cước là 3.300đ/phút - 55đ/s

    if (gio >= 0 && phut >= 0 && giay >= 0) {
        alert(tiencuoc)
    } else alert('Mời nhập lại')
        
}
