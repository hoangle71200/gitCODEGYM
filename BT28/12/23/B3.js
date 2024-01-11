// 3. tìm số lớn thứ 3 trong mảng.

let arr = [9,8,7,6,5,4,3,2,1];
// let max1 = 0;
// let max2 = 0;
// let max3 = 0;
// let x;
// let y;

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]> max1) {
//         max1 = arr[i];
//         x = i;
//     }
// }

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]> max2 && i != x) {
//         max2 = arr[i];
//         y = i;
//     }
// }

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]> max3 && i != x && i != y) {
//         max3 = arr[i];
//     }
// }
// console.log(max3);
for (let j=0; j<arr.length-1; j++) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i]> arr[i+1]) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}
console.log(arr[arr.length-3])