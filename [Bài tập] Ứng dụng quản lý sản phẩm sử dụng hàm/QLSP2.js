

class Product {
    name;
    image;
    position;
    constructor(name, image, position) {
        this.name = name;
        this.image = image;
        this.position = position;
    }
}

let pr1 = new Product('Kevin', 'https://upload-os-bbs.hoyolab.com/upload/2021/08/06/16543040/033fbc113bda714d970271f46e64f2d8_5573449670233771790.png?x-oss-process=image/resize,s_740/quality,q_80/auto-orient,0/interlace,1/format,png', 1);
let pr2 = new Product('Elysia', 'https://upload-os-bbs.hoyolab.com/upload/2021/08/06/16543040/7a015d8ce294729856f3c8460190741f_2321827407608570758.png?x-oss-process=image/resize,s_740/quality,q_80/auto-orient,0/interlace,1/format,png', 2);
let pr3 = new Product('Aponia', 'https://upload-os-bbs.hoyolab.com/upload/2022/11/24/106765572/e8d20724383184f8d367b567bb0a2657_4909003908345714252.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png', 3);
let prList = [pr1, pr2, pr3];

display();
function display () {
    document.getElementById('tablePID').innerHTML = `
        <tr>
            <th colspan="3">Product Name</th>
            <th>Number Product</th>
        </tr>   
    `;
    for (let i=0; i<prList.length; i++) {
        document.getElementById('tablePID').innerHTML += `
            <tr>
                <td>${prList[i].name}</td>
                <td><img src= '${prList[i].image}'></td>
                <td>${prList[i].position}</td>
                <td><button onclick="editP(${i})">Edit</button></td>
                <td><button onclick="deleteP(${i})">Delete</button></td>
            </tr>
        `;
    }
}

function addP () {
    let newName = prompt('Nhập tên: ');
    let newImg = prompt('Nhập link Img: ');
    let newPosition = prompt('Nhập Position: ');
    let newPr = new Product(newName, newImg, newPosition);
    prList.push(newPr);
    display();
}

function editP (i) {
    let newName = prompt('Nhập tên mới: ');
    let newImg = prompt('Nhập link Img mới: ');
    let newPosition = prompt('Nhập Position mới: ');
    prList[i] = {name: newName,
                image: newImg, 
                position: newPosition};
    display();
}

function deleteP (i) {
    prList.splice(i, 1);
    display();
}