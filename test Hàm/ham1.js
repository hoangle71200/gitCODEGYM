let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    // Write your code here
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let arrOut = [];
    let countA = arr.length;
    for (let key in arr) {
        if (arr[key] == 0) {
            count3++;
        } else if (arr[key] > 0) {
            count1++;
        } else {
            count2++;
        }
    }
    let out1 = (count1/countA).toFixed(6);
    let out2 = (count2/countA).toFixed(6);
    let out3 = (count3/countA).toFixed(6);
    arrOut.push(out1, out2, out3);
    for (let key in arrOut) {
        return arrOut[key]
    }
}

console.log(plusMinus(arr));