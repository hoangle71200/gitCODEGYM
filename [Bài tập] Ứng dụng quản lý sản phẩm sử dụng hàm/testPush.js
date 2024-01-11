
let arr = [];
function add() {
    let inp = document.getElementById('inputNameID').value;
    arr.push(inp);
    console.log(arr)
    document.getElementById('outID').innerHTML = `${arr}`;
}
