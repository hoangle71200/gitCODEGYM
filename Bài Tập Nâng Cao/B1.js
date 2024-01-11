let arms = prompt('Nhập số armstrong: ');
let armsNum = parseInt(arms);
let tong = 0;

for (let i = 0; i< arms.length; i++) {
    tong += Math.pow(arms[i], arms.length);
}

if (tong === armsNum) {
    alert('YES')
} else alert('NO')

