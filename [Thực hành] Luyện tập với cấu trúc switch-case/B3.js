let value = parseInt(prompt('Type a number', 0));
let a = value/(Math.abs(value));
switch (a) {
    case 1:
        alert('Số dương')
        break;
    case -1:
        alert('Số âm')
        break;
    default:
        alert('Số 0')
}