

function kiemtra () {
    let a = parseInt(document.getElementById('bienAID').value);
    let b = parseInt(document.getElementById('bienBID').value);
    let x = -b/a;
    if (a==0 && b == 0) {
       alert('PT vô số nghiệm')
    } else if (a == 0) {
        alert('PT vô nghiệm')
    } else alert(x)
}