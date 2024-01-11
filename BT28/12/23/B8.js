// 8. mảng 2 chiều, tính tổng của các đường chéo trong mảng

let a = [[1,2,3], [4,5,6], [7,8,9]];
let tong = 0;
let aL = a.length;
for (let i=0; i<aL; i++) {
    for (let j=0; j<aL; j++) {
        if (i !== j) {
            tong = tong + a[i][i] + a[i]
        }
    }
}

