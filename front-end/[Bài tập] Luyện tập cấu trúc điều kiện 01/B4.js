

function kiemtra () {
    let a = parseInt(document.getElementById('numb1ID').value);
    let b = parseInt(document.getElementById('numb2ID').value);
    let c = parseInt(document.getElementById('numb3ID').value);
    if (a>b && a>c) {
        alert(a)
    } else if (b>c && b>a) {
        alert(b)
    } else alert(c)
} 
