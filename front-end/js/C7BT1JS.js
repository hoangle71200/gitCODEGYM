

var vatLy = parseInt(prompt('Nhập điểm Vật Lý:'));
var hoaHoc = parseInt(prompt('Nhập điểm Hóa Học:'));
var sinhHoc = parseInt(prompt('Nhập điểm Sinh Học:'));

var tong = vatLy + hoaHoc + sinhHoc;

var tb = tong/3;

document.write('Điểm trung bình là: ' + tb);
document.write('<br>');
document.write('Điểm tổng là: ' + tong);