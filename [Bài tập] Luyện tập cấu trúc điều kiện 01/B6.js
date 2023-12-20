

function kiemtra () {
    let a = parseInt(document.getElementById('doanhsoID').value);
    let b = a*0.3;
    let c = a*0.2;
    let d = a*0.1;
    if (a<0) {
        alert('Ngủ ngoài đường')
    } else     if (a>=10000000) {
        alert('Hoa hồng nhận được là:'+ b)
    } else if (a>=5000000) {
        alert('Hoa hồng nhận được là:'+ c)
    } else if (a>=1000000) {
    alert('Hoa hồng nhận được là:'+ d)
    } else alert ('Không có hoa hồng')
}
