

function kiemtra () {
    let a = parseInt(document.getElementById('bienAID').value);
    let b = parseInt(document.getElementById('bienBID').value);
    let c = parseInt(document.getElementById('bienCID').value);
    let delta = b*b-4*a*c;
    let x1 = (-b-Math.sqrt(delta))/(2*a);
    let x2 = (-b+Math.sqrt(delta))/(2*a);
    if (a==0) {
       alert('PT bậc nhất')
    } else if (delta<0) {
        alert('PT vô nghiệm')
    } else if (delta == 0) {
        alert('Pt có nghiệm kép x1 = x2 = ' + (-b/(2*a)))
    } else alert ('PT có 2 nghiệm x1 = ' + x1 + ' và x2 = ' + x2 )
}