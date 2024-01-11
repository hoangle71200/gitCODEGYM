
let a = parseInt(prompt('Mời nhập chiều cao tam giác: '));
let tong1 = '';
let tong2 = '';
let tong3 = '';
let tong4 = '';

// for (let i=1; i<=a; i++) {
//     tong1 = tong1 + '*';
//     console.log(tong1);
//     console.log(tong1.length);
// }
console.log('Hình 1')
for (let i=1; i<=a; i++) {
    for(let j=1; j<=a; j++) {
        if (j>i) tong1=tong1+' ';
        else tong1=tong1+'*';
    }
    console.log(tong1);
    console.log(tong1.length);
    tong1 = '';
}
console.log('Hình 2')
// for (let i=a; i>=1; i--) {
//     for(let j=i; j>0; j--) {
//         tong2 = tong2 + '*';
//     }
//     console.log(tong2);
//     console.log(tong2.length);
//     tong2 = '';
// }
for (let i=0; i<a; i++) {
    for(let j=1; j<=a; j++) {
        if (j>(a-i)) tong1=tong1+' ';
        else tong1=tong1+'*';
    }
    console.log(tong1);
    console.log(tong1.length);
    tong1 = '';
}
console.log('Hình 3')
for (let i=0; i<a; i++) {
    for(let j=1; j<=a; j++) {
        if (j>=(a-i)) tong3=tong3+'*';
        else tong3=tong3+' ';
    }
    console.log(tong3);
    console.log(tong3.length);
    tong3 = '';
}
console.log('Hình 4')
for (let i=0; i<a; i++) {
    for(let j=1; j<=a; j++) {
        if (j>i) tong4=tong4+'*';
        else tong4=tong4+' ';
    }
    console.log(tong4);
    console.log(tong4.length);
    tong4 = '';
}