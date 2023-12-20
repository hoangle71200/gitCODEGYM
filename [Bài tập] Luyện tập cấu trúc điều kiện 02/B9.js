

function kiemtra () {
    let a = parseInt(document.getElementById('inputaID').value);
    let b = parseInt(document.getElementById('inputbID').value);
    let c = parseInt(document.getElementById('inputcID').value);
    if (a>0 && b>0 &&c>0 && a+b>c && b+c>a && a+c>b) {
       if (a===b && b===c) {
        alert('tam giác đều')
       } else if (a===b || b===c || c===a) {
        alert('tam giác cân')
       } else if (a*a===b*b+c*c || b*b===c*c+a*a || c*c===a*a+b*b) {
        alert('tam giác vuông')
       } else alert('tam giác thường')
    } else alert('a, b, c không là cạnh tam giác')
}