//Khai báo lớp Apple với các thuộc tính type, color, 
//phương thức getAppleInfo()
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
//Khai báo hàm getAppleInfo()
//Khuyến nghị: đây là cách không nên dùng, 
//đọc tiếp sẽ rõ
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}
let apple = new Apple('macintosh');
apple.color = "reddish";
console.log(apple.getInfo());