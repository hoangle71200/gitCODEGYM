// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. 
// Ví dụ, nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ] sau khi thực hiện đảo ngược sẽ là "162csc"

let arr = prompt('Nhập mảng: ');
let arrC = [];
let arrO = '';
for (let i=0; i<arr.length; i++) {
    arrC.push(arr[i]);
}
for (let i=arrC.length-1; i>=0; i--) {
    arrO += arrC[i];
}

console.log(arrO)