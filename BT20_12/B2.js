
function kiemtra () {
    let tuoi = parseInt(document.getElementById('tuoiID').value);
    if (tuoi >=60) alert('Người cao tuổi')
    else if (tuoi >=40) alert('Người trưởng thành')
    else if (tuoi >=20) alert('Thiếu niên')
    else if (tuoi > 0) alert('Trẻ em')
    else ('Mời nhập lại')
} 
