// 5. Kiểm tra mảng có phải là mảng tăng dần đều hay không

let arr = [1,2,3,4,5,6,7,8,9]
let count = 0;
let bientang = arr[1]-arr[0];
if (bientang<=0) {
    console.log("NO");
} else {
    for (let i=1; i<arr.length-1; i++) {
        if (arr[i+1]-arr[i]==bientang) {
            continue;
        } else {
            count++;
            console.log('NO2');
            break;
        }
    }
}
if (count===0) console.log('YES');