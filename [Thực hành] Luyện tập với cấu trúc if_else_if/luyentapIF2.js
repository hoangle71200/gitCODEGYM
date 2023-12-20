let account = prompt("Account?");

if (account == 'Admin') {
    let password = prompt("Password?");
    if (password == 'TheMaster') {
        alert('Welcome')
    } else if (password == 'null' || password == '') {
        alert('Canceled')
    } else alert('Wrong password')
} else if (account == 'null'|| account == '') {
    alert('canceled')
} else alert("I don’t know you")



