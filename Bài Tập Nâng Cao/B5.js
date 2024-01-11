let hp = prompt('Nhập số happy: ');
let tong = 0;


while (tong != 1) {
    tong = 0;
    for (let i=0; i<hp.length; i++) {
        tong = tong + Math.pow((parseInt(hp[i])), 2);
    }
    hp = '' + tong;
    console.log(hp);
}

if (tong == 1) {
    console.log('YES')
} else console.log("NO")