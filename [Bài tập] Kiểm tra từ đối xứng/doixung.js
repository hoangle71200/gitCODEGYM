let a = prompt('Nhập từ đối xứng: ')
let count = 0;
function isPalindrome() {
    for (let i=0; i<=a.length/2; i++) {
        if (a[i] === a[a.length-i-1]) continue;
        else count++;
    }
    if (count === 0) console.log(a)
    else console.log('NO')
}
isPalindrome(a);

