let a = parseInt(prompt('Mời nhập kích thước trái tim: '));
if (a%2 == 0) {
    a=a;
} else a = a+1;
let dinhTim1 = parseInt(a*1/4);
let dinhTim2 = parseInt(a*3/4);
let tim = '';
for (let i=0; i<a/2;i++) {
    for (let j=1; j<=a; j++) {
        if(j === (dinhTim1) || j === (dinhTim1-1) || j === (dinhTim1+1) || j === (dinhTim2) || j === (dinhTim2-1) || j === (dinhTim2+1)) {
            tim = tim + '*';
        } else tim = tim + ' ';
    }
    console.log(tim);
    tim = '';
} 