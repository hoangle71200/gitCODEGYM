 let chuoiI = prompt('Nhập chuỗi: ');
// let arrC = [[]];
// let hoanvi = [];


// for (let i=0; i<chuoi.length; i++) {
//     arrC.push(chuoi[i])
//     hoanvi.push(chuoi[i]);

// }
// console.log(arrC)

function subStrings(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        result.push(str.slice(i, j));
      }
    }
    return result;
  }
  
//   let chuoi = "abc";
//   console.log(subStrings(chuoi));

  console.log(subStrings(chuoiI));