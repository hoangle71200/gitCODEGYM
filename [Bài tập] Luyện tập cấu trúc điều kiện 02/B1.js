

function kiemtra () {
    let doC = parseInt(document.getElementById('doCID').value);
    let doF = doC *9 /5 +32;
    if (doC != undefined) {
       alert(doF)
    } else alert('Mời nhập lại')
}