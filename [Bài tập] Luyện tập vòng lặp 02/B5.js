
let tienbandau = parseInt(prompt('Mời nhập số tiền ban đầu: '));
let thangchovay = parseInt(prompt('Mời nhập số tháng cho vay: '));
let laihangthang = parseFloat(prompt('Mời nhập số lãi hàng tháng: '));
console.log('Số tiền ban đầu là:' + tienbandau)
console.log('Số tháng cho vay là:' + thangchovay)
console.log('Số lãi hàng tháng là:' + laihangthang)

for (let i=1; i<=thangchovay; i++) {
    tienbandau = tienbandau + tienbandau * laihangthang;
    console.log('Tháng' + i)
    console.log('Số tiền hiện tại:' + tienbandau);

}



