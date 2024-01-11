//4. kiểm tra mảng có phải là mảng tăng dần hay không

let arr = [1,2,3,4,5,6,7,8,9]
let count = 0;
for (let i=0; i<arr.length-1; i++) {
    if (arr[i] <= arr[i+1]) {
        continue;
    } else if (arr[i] > arr[i+1]) {
        count++;
        console.log('NO');
        break;
    }
}
if (count===0) console.log('YES');