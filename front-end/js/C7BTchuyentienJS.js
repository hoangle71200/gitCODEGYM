function convertMoney () {
    let typeOfMoney1 = document.getElementById('typeOfMoney1');
    let giaTri = typeOfMoney1.options[typeOfMoney1.selectedIndex].text;
    console.log(giaTri);
}
// function convertMoney () {
//     let amount = document.getElementById('amount');
//     let giaTriAmount = amount.value
//     var usdToVnd;
//     var vndToUSD;

//     let typeOfMoney1 = document.getElementById('typeOfMoney1');
//     let giaTri = typeOfMoney1.options[typeOfMoney1.selectedIndex].text;
//     console.log(giaTri);

//     usdToVnd = amount *23000;
//     vndToUSD = amount /23000;

//     if (typeOfMoney1 === USD) {
//         if (typeOfMoney2 === USD) {
//             document.write('Result: ' + amount + '$')
//         } else if (typeOfMoney2 === VND) {
//             document.write('Result: ' + usdToVnd + 'Đ')
//         }
//     } else if (typeOfMoney1 === VND) {
//         if (typeOfMoney1 === USD) {
//             document.write('Result: ' + vndToUSD + '$')
//         } else if (typeOfMoney1 === VND) {
//             document.write('Result: ' + amount + 'Đ')
//         }
//     }
// }

