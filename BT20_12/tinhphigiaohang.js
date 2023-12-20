
function xacnhan() {
    let khoangcach = parseInt(document.getElementById('khoangcachID').value);
    let trongluong = parseInt(document.getElementById('trongluongID').value);
    let tocdo = document.getElementById('tocdoID').value;
    if (khoangcach > 0 && trongluong > 0) {
        switch (tocdo) {
            case 'tieuchuan':
                alert('Chi phí giao hàng là : ' + (khoangcach * 15000 * 1 + trongluong * 1000));
                break;
            case 'nhanh' :
                alert('Chi phí giao hàng là : ' + (khoangcach * 15000 * 1.5 + trongluong * 1000));
                break;
            case 'hoatoc' :
                alert('Chi phí giao hàng là : ' + (khoangcach * 15000 * 1.75 + trongluong * 1000));
                break;
        }
    } else ('Mời nhập lại')
}