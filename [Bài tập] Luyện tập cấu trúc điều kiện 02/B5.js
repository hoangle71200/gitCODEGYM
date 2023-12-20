

function kiemtra () {
    let a = parseInt(document.getElementById('canhAID').value);
    let b = parseInt(document.getElementById('canhBID').value);
    let S = a*b/2;
    if (a>0 && b>0) {
       alert(S)
    } else alert('Mời nhập lại')
}