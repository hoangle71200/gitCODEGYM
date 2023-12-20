
function kiemtra () {
    let nhiet = parseInt(document.getElementById('nhietID').value);
    if (nhiet>=30) alert('Thời tiết nóng')
    else if (nhiet>=20) alert('Thời tiết ấm áp')
    else if (nhiet>=10) alert('Thời tiết mát mẻ')
    else alert('Thời tiết lạnh')
} 
