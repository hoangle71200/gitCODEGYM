let number = prompt('Nhập chuỗi: ');
let arr = [];
let str;

for (let i=0; i<number.length; i++) {
    str = number[i];
    for (let j=0; j<number.length; j++) {
        if (i !== j) {
            str += number[j];  
        }
    }
    arr.push(str);

    str = number[i];
    for (let j=number.length-1; j>=0; j--) {
        if (i !== j) {
            str += number[j];
            
        }
    }
    arr.push(str);  
}
console.log(arr)
