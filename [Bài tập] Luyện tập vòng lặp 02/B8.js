
function play () {
    let numKhoang = parseInt(prompt('Nhập khoảng số'));
    if (numKhoang) {
        let randomNum = Math.floor(Math.random() * numKhoang);
        console.log(randomNum);
        let numDoan = parseInt(prompt('Nhập số bạn đoán'));
        for ( i=0; i<3; i++) {
            if (numDoan === randomNum) {
                alert('Chúc mừng');
                break;
            } else if (numDoan > randomNum) { 
                confirm('Số nhập lớn hơn')
                if (i<2) {
                    numDoan = parseInt(prompt('Mời nhập lại'));
                } else if (i == 2) alert('Thất bại')
            } else if (numDoan < randomNum) { 
                confirm('Số nhập nhỏ hơn')
                if (i<2) {
                    numDoan = parseInt(prompt('Mời nhập lại'));
                } else if (i == 2) alert('Thất bại')
            }
        } 
    } else alert('Bạn không nhập số nào')
}