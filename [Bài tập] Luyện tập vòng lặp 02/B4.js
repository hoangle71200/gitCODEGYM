

let rong = parseInt(prompt('Mời nhập chiều rộng chữ nhật: '));
let cao = parseInt(prompt('Mời nhập chiều cao cao chữ nhật: '));
let outputRong = '';
for (let i=0; i<rong; i++) {
    outputRong = outputRong + '*';
}
console.log(outputRong);
outputRong = '';

for(let i=1; i<(cao-1); i++) {
    for (let i=0; i<rong; i++) {
        if (i == 0 || i == (rong-1)) {
            outputRong = outputRong + '*';
        }
        else outputRong = outputRong + ' ';
    }
    console.log(outputRong);
    outputRong = '';
}

for (let i=0; i<rong; i++) {
    outputRong = outputRong + '*';
}
console.log(outputRong);
outputRong = '';


