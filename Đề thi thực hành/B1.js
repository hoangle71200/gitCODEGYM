

let diem = [10, 5, 8, 4, 8, 9,7, 6, 6];
let flatArr = [];
let index = parseInt(prompt('Số lớn thứ: '))

function sapxep (arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (arr[j] >= arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        } 
    }
    return arr;
}
console.log(sapxep(diem))
function flatArray (arr, flatArr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            continue;
        }
        else flatArr.push(arr[i])
    }
    return flatArr;
}
console.log(flatArray(diem, flatArr))

function maxIndex (index) {
    console.log(flatArr[flatArr.length-index])
}
maxIndex(index)