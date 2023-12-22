

let fibo = 0;
let fibo1 = 1;
tong = 0;

for (let i = 0; i<20; i++) {
    tong = tong + fibo;
    temp = fibo + fibo1;
    fibo = fibo1;
    fibo1 = temp;
}
console.log(tong)

