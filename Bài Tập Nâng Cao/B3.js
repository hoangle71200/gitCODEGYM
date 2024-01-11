// let chuoi = prompt('Nhập chuỗi: ');
// let arrC = [];
// let hoanvi = '';

// for (let i=0; i<chuoi.length; i++) {
//     arrC.push(chuoi[i])
// }
// console.log(arrC)
// for (let i=0; i<chuoi.length; i++) {
//     hoanvi += arrC[i];
//     for (let j=0; j<chuoi.length; j++) {
//         if (i != j) {
//             hoanvi += arrC[j];
//             for (let k=0; k<chuoi.length; k++) {
//                 if (k!=i && k!= j) {
//                     hoanvi += arrC[k];
//                     console.log(hoanvi);
//                     hoanvi.p
//                     // for (let l=0; l<chuoi.length; l++) {
//                     //     if (l!=i && l!= j && l!=k) {
//                     //         hoanvi += arrC[l];
//                     //     } else continue;
//                     // }
//                 }else continue;
//             }
//         }else continue;
//     }
    
// }
function permuteString(input) {
    let results = [];
  
    function permute(prefix, str) {
      if (str.length === 0) {
        results.push(prefix);
      } else {
        for (let i = 0; i < str.length; i++) {
          permute(prefix + str.charAt(i), str.slice(0, i) + str.slice(i + 1));
        }
      }
    }
  
    permute('', input);
    return results;
  }
  
//   let inputString = 'abc';
let inputString = prompt('Nhập chuỗi: ');
  let permutations = permuteString(inputString);
  console.log(permutations);