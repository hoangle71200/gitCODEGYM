

function User(username, password, avatar) {
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.username}  ${this.password}`;
    }
}

var hoang = new User('Le', 'Hoang', 'av1')
var hung = new User('Do', 'Hung', 'av2')

hoang.title = 'hung ngu';
hoang.author = {
    name: 'Hung',
    ho: 'Do'
}

// User.getName = function () {
//     return `${this.username}  ${this.password}`
// }
console.log(hoang.getName())
console.log(hung.getName())