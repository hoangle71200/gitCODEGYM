

let str1 = 'happy new year year';
let str2 = prompt('Nhập chuỗi: ');
let count = 0;
let arrCount = [];
function kiemtra (str1, str2) {
    let first1 = [];
    for (let j=0; j<str1.length; j++) {
        if (str2[0] === str1[j]) {
            first1.push(j);
            continue;
        }
    }
    console.log('Bắt đầu tại vị trí: ' + first1)
    for (let k=0; k<first1.length; k++) {
        for (let i=0; i<str2.length; i++) {
            for (let j=first1[k]; j<first1[k]+str2.length; j++){
                if (str2[i] === str1[j]){
                    count++;
                } 
            }
        }
        arrCount.push(count);
        count = 0;
    }
    console.log(arrCount)

    for (let i=0; i<arrCount.length; i++) {
    if (arrCount[i] === str2.length) {
        console.log('Trùng tại vị trí ' + first1[i]);
    }
    else continue;
}
}
kiemtra(str1, str2);


