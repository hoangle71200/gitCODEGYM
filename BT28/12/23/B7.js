// 7. Đổi ngược lại giá trị của mảng

let arr = [1,2,3,4,5,6,7,8,9]
let aL = arr.length;
for (let i=0; i<=aL/2; i++) {
    temp = arr[i];
    arr[i] = arr[aL-1-i];
    arr[aL-1-i] = temp;
}

console.log(arr)