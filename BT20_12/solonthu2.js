

// let a = parseInt(document.getElementById('aID').value);
// let b = parseInt(document.getElementById('bID').value);
// let c = parseInt(document.getElementById('cID').value);
// let d = parseInt(document.getElementById('dID').value);
// let max1 = 0;
// let max2 = 0;

// if (a>b && a>c && a>d) {
    
// } 
let so1 = parseFloat(prompt("Nhập số thứ nhất:"));
let so2 = parseFloat(prompt("Nhập số thứ hai:"));
let so3 = parseFloat(prompt("Nhập số thứ ba:"));
let so4 = parseFloat(prompt("Nhập số thứ tư:"));
let soLonNhat = Math.max(so1, so2, so3, so4);
let soLonThuHai;

if (so1 == soLonNhat) {
    soLonThuHai = Math.max(so2,so3, so4);
} else if (so2 == soLonNhat) {
    soLonThuHai = Math.max(so1,so3, so4);
} else if (so3 == soLonNhat) {
    soLonThuHai = Math.max(so1, so2, so4);
} else {
    soLonThuHai = Math.max(so1, so2, so3);
}

console.log("Số lớn thứ 2 là: " + soLonThuHai);

if (so1 !== soLonNhat) {
    soLonThuHai = Math.max(so1, Math.max(so2, Math.max(so3, so4)));
} else if (so2 !== soLonNhat) {
    soLonThuHai = Math.max(so2, Math.max(so1, Math.max(so3, so4)));
} else if (so3 !== soLonNhat) {
    soLonThuHai = Math.max(so3, Math.max(so1, Math.max(so2, so4)));
} else {
    soLonThuHai = Math.max(so4, Math.max(so1, Math.max(so2, so3)));
}