// Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng. Chương trình này đếm số ký tự số trong mảng. 

let arr = prompt('Nhập mảng: ');
let arrLth = prompt('Nhập kích thước mảng: ');
let arrC = [];
let arrNum = [0,1,2,3,4,5,6,7,8,9];
let count = 0;
arr.length = arrLth;

for (let i=0; i<arr.length; i++) {
    arrC.push(arr[i]);
}

for (let i=0; i<arrC.length; i++) {
    for (let j=0; j<arrNum.length; j++) {
        if (arrC[i] == arrNum[j]) {
            count++;
        }
    }
}
console.log(arr);
console.log(arrLth);
console.log(arrC);
console.log(count);


