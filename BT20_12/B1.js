
function kiemtra () {
    let thang = parseInt(document.getElementById('thangID').value);
    switch (thang) {
        case 1:
            case 3:
                case 5:
                    case 7:
                        case 8:
                            case 10: 
                                case 12:
                                    alert('tháng có 31 ngày');
                                    break;
        case 2:
            alert('tháng có 28 hoặc 29 ngày');
            break;
        case 4:
            case 6:
                case 9:
                    case 11:
                        alert('tháng có 30 ngày');
                        break;
    }
} 
