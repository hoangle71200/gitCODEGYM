


function kiemtra () {
    let a = parseInt(document.getElementById('aID').value);
    let b = parseInt(document.getElementById('bID').value);

    if (b == 0) {
        alert ('Mời nhập lại')
    } else {
        if (a%b == 0) {
            alert('YES')
        } else alert('NO')
    }
} 
