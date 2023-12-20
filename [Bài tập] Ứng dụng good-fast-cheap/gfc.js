let checkbox = document.getElementsByName('txtcheck1');
// console.log(typeof checkbox)
// function gfc () {
//     let a = Math.floor(Math.random() *3);
//     if (checkbox[0].checked === true && checkbox[1].checked === true && checkbox[2].checked === true) {
//         checkbox[a].checked = false;
//     }
// }

function gfc1 () {

    if (checkbox[1].checked === true && checkbox[2].checked === true) {
        checkbox[2].checked = false;
    }
}

function gfc2 () {

    if (checkbox[0].checked === true && checkbox[2].checked === true) {
        checkbox[0].checked = false;
    }
}

function gfc3 () {

    if (checkbox[0].checked === true && checkbox[1].checked === true ) {
        checkbox[1].checked = false;
    }
}
