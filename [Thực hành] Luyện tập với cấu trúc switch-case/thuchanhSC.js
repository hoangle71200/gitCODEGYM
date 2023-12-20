

// let browser = prompt("Enter browser name!")

// switch (browser) {
//     case 'Edge' :
//         alert("You've got the Edge!");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;
//     default: 
//         alert('We hope that this page looks ok!');
// }

// let a = prompt('a?', '0');

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert(2,3);
//         break;
//     default:
//         alert('Mời nhập lại')
// }

let value = parseInt(prompt('Type a number', 0));
let a = value>0
switch (value>0 || value<0) {
    case true:
        alert(1)
        break;
    case false:
        alert(-1)
        break;
    default:
        alert(0)
}