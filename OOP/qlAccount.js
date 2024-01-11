

class Account {
    id;
    username;
    password;
    phone;
    address;
    role;
    constructor(id, username, password, phone, address, role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.role = role;
    }

    // changePassword (newPassword ) {
    //     if (newPassword === this.password) {
    //         alert('Duplicate password!!!');
    //         this.changePassword();
    //     }
    //     else this.password = newPassword;
    // }
}
let acc1 = new Account(1, 'lhhoang1', '123456', 123456, 'HN, VN', 'president');
let acc2 = new Account(2, 'lhhoang2', '123456', 234567, 'DN, VN', 'student');
let acc3 = new Account(3, 'lhhoang3', '123456', 345678, 'SG, VN', 'student')
let listAccount = [acc1, acc2, acc3];

function displayAccount (listAccount) {
    document.getElementById('tableID').innerHTML = `
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
        </tr>   
    `;
    for (let key in listAccount) {
        document.getElementById('tableID').innerHTML += `
            <tr>
                <td>${listAccount[key].id}</td>
                <td>${listAccount[key].username}</td>
                <td>${listAccount[key].phone}</td>
                <td>${listAccount[key].address}</td>
                <td>${listAccount[key].role}</td>
                <td><button onclick="editA(${key})">Edit</button></td>
                <td><button onclick="deleteA(${key})">Delete</button></td>
            </tr>   
        `
    }
}

function editA (key) {
    let newUsername = prompt('Nhập username mới');
    let newPassword = prompt('Nhập password mới');
    let newPhone = prompt('Nhập phone mới');
    let newAddress = prompt('Nhập address mới');
    let newRole = prompt('Nhập role mới');
    listAccount[key] = 
    {
        id: listAccount[key].id,
        username: newUsername,
        password: newPassword,
        phone: newPhone,
        address: newAddress,
        role: newRole
    };
    displayAccount(listAccount);
}

function deleteA (key) {
    listAccount.splice(key, 1);
    displayAccount(listAccount);
}

function searchA () {
    let inputSearch = document.getElementById('searchID').value;
    let outputSearch = [];
    for (let a in listAccount) {
        if (inputSearch === listAccount[a].username) {
            outputSearch.push(listAccount[a]);
        }
    }
    displayAccount(outputSearch);
}

console.log(listAccount);
displayAccount(listAccount);