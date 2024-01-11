// 2. cho 1  mảng 2 chiều, tính trung bình cộng của tất cả các giá trị trong mảng 2 chiều đó

let arr = [[1,2,3], [4,5,6], [7,8,9]];
let tong = 0;
let count = 0;
for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
        tong += arr[i][j];
        count++;
    }
}

console.log(tong/count)