
function kiemtra () {
    let tuoi = parseInt(document.getElementById('tuoiID').value);
    if (tuoi >=60) alert('Gia vé người cao tuổi là : 100.000đ')
    else if (tuoi >=20) alert('Giá vé người lớn là : 150.000đ')
    else if (tuoi > 0) alert('Giá vé trẻ em là : 80.000đ')
    else ('Mời nhập lại')
} 
