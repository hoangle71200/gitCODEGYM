
let a = parseInt(prompt('Mời nhập chiều cao tam giác: '));
let tong1 = '';
let tong2 = '';
let tong3 = '';
let tong4 = '';
for (let i=1; i<=a; i++) {
    tong1 = tong1 + '*';
    console.log(tong1);
}

for (let i=a; i>=1; i--) {
    for(let j=i; j>0; j--) {
        tong2 = tong2 + '*';
    }
    console.log(tong2);
    tong2 = '';
}
