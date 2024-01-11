let x = [-3, 5, 1, 3, 2, 10];
let a = x.length;

// // if (x.length %2 != 0) {
// //     a = x.length - 1;
// // } else if (x.length%2 == 0) {
// //     a = x.length;
// // }
// // console.log(x)
for (let i=0; i<(a/2); i++) {
    let temp = x[i];
    x[i] = x[a-i-1];
    x[a-i-1] = temp;
}
console.log(x)
// let x = [-3, 5, 1, 3, 2, 10];
// let first = 0;
// let last = x.length - 1;
// while (first < last) {
//     let b = x[first];
//     x[first] = x[last];
//     x[last] = b;
//     first++;
//     last--;
// }
// console.log(x);