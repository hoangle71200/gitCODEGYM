// let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// let arr = [6 ,5 ,2 ,3 ,5, 2, 2, 1, 1 ,5 ,1 ,3 ,3, 3 ,5];

// let x = 1;
// let y = 3;
// let z = 2;
let arr = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];

function formingMagicSquare(s) {
    // Write your code here
    let arrSum = [];
    let sumCol = 0;
    let sumRow = 0;
    let sumCheo = 0;
    for (let j=0; j<s.length; j++) {
        for (let i=0; i<s.length; i++) {
            sumCol += s[i][i];
        }
        arrSum.push(sumCol);
        sumCol = 0;
    }
    for (let j=0; j<s.length; j++) {
        for (let i=0; i<s.length; i++) {
            sumRow += s[j][i];
        }
        arrSum.push(sumRow);
        sumRow = 0;
    }
    return arrSum;
}
console.log(formingMagicSquare(arr));
