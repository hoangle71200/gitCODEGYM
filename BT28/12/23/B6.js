// 6. Hoán đổi giá trị của các số lẻ thành 0;

let arr = [1,2,3,4,5,6,7,8,9]
for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 == 0) {
        continue;
    } else {
        arr[i] = 0;
    }
}

console.log(arr)