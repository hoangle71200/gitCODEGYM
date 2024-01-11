// Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

let arr1 = prompt('Nhập chuỗi 1: ');
let arr2 = prompt('Nhập chuỗi 1: ');
let count = 0;
for (let i=0; i<arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
        console.log('NO');
        break;
    } else count++;
}

if (count >0) console.log('YES');