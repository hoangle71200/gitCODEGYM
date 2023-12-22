
tong = 0;

for (let i = 0; i<4; i++) {
    for(j=i*7; j<(i+1)*7; j++) {
        if(j%7 == 0) {
            tong = tong + j;
        }
    }
}
console.log(tong)

