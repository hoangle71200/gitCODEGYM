
function kiemtra () {
    let thang = parseInt(document.getElementById('thangID').value);
    if (thang == 1 || thang == 2 || thang == 3) alert('Mùa xuân')
    else if (thang == 4 || thang == 5 || thang == 6) alert('Mùa hè')
    else if (thang == 7 || thang == 8 || thang == 9) alert('Mùa thu')
    else if (thang == 10 || thang == 11 || thang == 12) alert('Mùa đông')
    else ('Mời nhập lại')
} 
