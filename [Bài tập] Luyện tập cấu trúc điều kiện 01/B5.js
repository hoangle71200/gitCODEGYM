

function kiemtra () {
    let a = parseInt(document.getElementById('diem1ID').value);
    let b = parseInt(document.getElementById('diem2ID').value);
    let c = parseInt(document.getElementById('diem3ID').value);
    let diemtb = (a+b+c)/3;

    if (diemtb>=9) {
        alert('Giỏi')
    } else if (diemtb>=7) {
        alert('Khá')
    } else if (diemtb>=5) {
        alert('TB')
    } else alert('Kém')
} 
