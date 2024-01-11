// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. 
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1. 

let arr = [1,2,3,4,5,6,7,8,9];
let a = parseInt(prompt('Nhập số: '));

function isInArr (arr, a) {
    let count = 0;
    for (let i=0; i< arr.length; i++) {
        if (a === arr[i]) {
            count++;
        }
    } 
    if (count === 0) return -1;
    else return count;
}

alert(isInArr(arr, a))