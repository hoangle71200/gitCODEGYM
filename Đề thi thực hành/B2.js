let arr = [10, 5, 8, 4, 8, 9, 7, 6, 6];
let index = 5;
let newArr = [];
function tryRemoveFromArray(index) {
    if (typeof index === "number" ) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i] === index)
            arr[i] = 0;
        }
        for (let j=0; j<arr.length; j++) {
            if (arr[j]) {
                newArr.push(arr[j])
            }
        }
        console.log(arr)
        console.log(newArr);
    }
    else console.log(arr);
}

tryRemoveFromArray(index);

