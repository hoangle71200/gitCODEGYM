// Bài 6: Viết chương trình nhập vào một mảng ký tự, 
// tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )

let arr = [1,2,3,4,5,6,7,8,9]
for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 == 0) {
        continue;
    } else {
        arr[i] = 0;
    }
}

console.log(arr)