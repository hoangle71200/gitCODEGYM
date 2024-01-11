var arr = [];


var add = function () {
    var inputArray = parseInt(document.getElementById('mangID').value);
    if (inputArray) {
        arr.push(inputArray);
        document.getElementById('mangID').innerHTML = '';
    }
}


var display = function () {
    // for (var key in arr){
    //     console.log(arr[key]);
    //     document.getElementById('outputMangID').value = arr[key];
    // }
    let e = "<br/>";
    for (let i = 0; i < arr.length; i++) {
        e += "Element " + i + " = " + arr[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}