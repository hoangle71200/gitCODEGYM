
function User (firstName, lastName, age, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.email = email;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let hoang = new User('Le', 'Hoang', 23, 'Ha Noi, VN', 'hoangle71200@gmail.com');
function inputInfor () {
    let inputFName = document.getElementById('firstNameID').value;
    let inputLName = document.getElementById('lastNameID').value;
    let inputAge = parseInt(document.getElementById('ageID').value);
    let inputAddress = document.getElementById('addressID').value;
    let inputEmail = document.getElementById('emailID').value;
    let inputHoang = new User(inputFName, inputLName, inputAge, inputAddress, inputEmail);
    console.log(inputHoang);
    document.getElementById('outFNameID').innerHTML = 'Họ: ' + inputFName;
    document.getElementById('outLNameID').innerHTML = 'Tên: ' + inputLName;
    document.getElementById('outAgeID').innerHTML = 'Tuổi' + inputAge;
    document.getElementById('outAddressID').innerHTML = 'Địa chỉ: ' + inputAddress;
    document.getElementById('outEmailID').innerHTML = 'Email: ' + inputEmail;
}
// console.log(hoang)

