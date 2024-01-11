//Bài 4: Viết một chương trình để đếm số từ trong một chuỗi


let arr = prompt('Nhập mảng: ');
let arrC = [];
let arrNum = [0,1,2,3,4,5,6,7,8,9];


for (let i=0; i<arr.length; i++) {
    arrC.push(arr[i]);
}
let count = arrC.length;
for (let i=0; i<arrC.length; i++) {
    for (let j=0; j<arrNum.length; j++) {
        if (arrC[i] == arrNum[j] ) {
            count--;
        }
    }
}
console.log(arr);
console.log(arrC);
console.log(arrC.length);
console.log(count);


