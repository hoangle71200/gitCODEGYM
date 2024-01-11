class User {
    constructor (username, password, address, image, score) {
        this.username = username;
        this.password = password;
        this.address = address;
        this.image = image;
        this.score = score;
    }
}

let user1 = new User('Kevin', '1', 'HN', 'image/kevin.gif', 500);
let user2 = new User('Elysia', '2', 'DN', 'image/elysia.gif', 400);
let user3 = new User('Aponia', '3', 'HUE', 'image/aponia.gif', 300);
let user4 = new User('Eden', '4', 'HCM', 'image/eden.gif', 200);
let user5 = new User('Vill V', '5', 'HN', 'image/vill_v.gif', 100);
let listUser = [user1, user2, user3, user4, user5];

function checkLogin () {
    let username = document.getElementById('usernameID').value;
    let password =  document.getElementById('passwordID').value;
    let count = 0;
    let i = 0;
    for (let key in listUser) {
        if (username == listUser[key].username && password == listUser[key].password) {
            i = key;
            count++;
        }
    }
    if (count>0) {
        alert('Login Success');
        loginSuccess(i);
    } else if (count == 0) {
        alert('Wrong username or password');
        reload();
    }
}
function loginSuccess (key) {
    userInfor(key);    
}

function reload () {
    window.location.reload();
}

function userInfor (key) {
    document.getElementById('loginID').innerHTML = 
    `
        <img id="imgUserID" src="${listUser[key].image}" alt="Lỗi">
        <br>
        <p id="usernameID" style="font-weight: bold;">${listUser[key].username}</p>
        <p id="addressID">Address: ${listUser[key].address}</p>
        
    `
    document.getElementById('signupID').innerHTML = '';
    setHighScore(); 
}

function signUp () {
    let usernameDK  = document.getElementById('usernameDKID').value;
    let passwordDK = document.getElementById('passwordDKID').value;
    let repassworDK = document.getElementById('repasswordDKID').value;
    let imageDK = document.getElementById('imageDKID').value;
    let addressDK = document.getElementById('addressDKID').value;
    if (passwordDK !== repassworDK) {
        alert('Passwords do not match');
        return;
    }

    let newUser = new User(usernameDK, passwordDK, addressDK, imageDK, 0);
    listUser.push(newUser);
    alert('Sign up Success')
    console.log(listUser);
}

function logOut () {
    let isLogOut = confirm('Are you sure you want to sign out?');
    if (isLogOut) {
        document.getElementById('loginID').innerHTML = 
        `
            <p>Login</p>
            Username
            <input id="usernameID" type="text" placeholder="Type your Username">
            <br>
            Password
            <input id="passwordID" type="password" placeholder="Type your Password">
            <div  style="text-align:center">
                <input onclick="checkLogin()" type="submit" value="Login">
                <input type="reset" value="Reset">
            </div> 
        `
    }
    else return;
}

function setHighScore () {
    document.getElementById('highScoreID').innerHTML = 
    `
        <tr>
            <td><img src="image/topPlayer2.png" alt="error" style="width: 30px; height: 30px;"></td>
            <td><span style="color: yellow;">${listUser[0].username}</span></td>
            <td><span style="color: yellow;">:</td>
            <td><span style="color: yellow;">${listUser[0].score}</span></td>
        </tr>
    `
    for (let i=1; i<listUser.length; i++) {
        document.getElementById('highScoreID').innerHTML +=
        `
            <tr>
                <td style="width: 30px; height: 30px;"> </td>
                <td>${listUser[i].username}</td>
                <td>:</td>
                <td>${listUser[i].score}</td>
            </tr>
        ` 
    }
}