

let fibo = 0;
let fibo1 = 1;

for (let i = 0; i<20; i) {
    temp = fibo + fibo1;
    fibo = fibo1;
    fibo1 = temp;
    if(fibo % 5 == 0) {
        console.log(fibo);
        break;
    }
}

