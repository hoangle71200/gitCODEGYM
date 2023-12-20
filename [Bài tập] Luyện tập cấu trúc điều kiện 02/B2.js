

function kiemtra () {
    let met = parseInt(document.getElementById('metID').value);
    let ft = met * 3.2808;
    if (met != '') {
       alert(ft)
    } else alert('Mời nhập lại')
}