let numb = prompt('Nhập số có 3 chữ số: ');
let numbNum = parseInt(numb);
let stringN = '';
let arrNum = [];

for (let i=0; i<3; i++) {
    switch (numb[i]){
        case '1': 
            arrNum.push('một');
            break;
        case '2': 
            arrNum.push('hai');
            break;
        case '3': 
            arrNum.push('ba');
            break;
        case '4': 
            arrNum.push('bốn');
            break;
        case '5': 
            arrNum.push('năm');
            break;
        case '6': 
            arrNum.push('sáu');
            break;
        case '7': 
            arrNum.push('bảy');
            break;
        case '8': 
            arrNum.push('tám');
            break;
        case '9': 
            arrNum.push('chín');
            break;
        case '0': 
            arrNum.push('không');
            break;
    }
}
console.log(arrNum)

if (arrNum[1] == 'không') {
    if (arrNum[2] == 'không') {
        stringN = stringN + arrNum[0] + ' trăm';
    } else stringN = stringN + arrNum[0] + ' trăm' + ' lẻ ' + arrNum[2];
} else if (arrNum[1] == 'một') {
    if (arrNum[2] == 'không') {
        stringN = stringN + arrNum[0] + ' trăm' + ' mười ';
    } else {
        stringN = stringN + arrNum[0] + ' trăm' + ' mười ' + arrNum[2];
    }
} else {
    if (arrNum[2] == 'không') {
        stringN = stringN + arrNum[0] + ' trăm ' + arrNum[1] + ' mươi';
    } else {
        stringN = stringN + arrNum[0] + ' trăm ' + arrNum[1] + ' mươi ' + arrNum[2];
    }
}
console.log(stringN)