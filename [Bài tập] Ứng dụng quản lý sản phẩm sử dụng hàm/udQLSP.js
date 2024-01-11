let productList = ['Java', 'PHP', 'Ruby'];
displayP()
function addP () {
    productList.push(document.getElementById('newProductID').value);
    alert('Add Success');
    displayP();
}

function displayP () {
    document.getElementById('nameProduciID').innerHTML = '';
    for (let i=0; i<productList.length; i++){
        document.getElementById('nameProduciID').innerHTML += `
            <tr>
                <td class="tdOne">${productList[i]}</td>
                <td><button onclick="editP(${i})">Edit</button></td>
                <td><button onclick="deleteP(${i})">Delete</button></td>
                <td></td>
            </tr>
            <br>
        `;
    }
}


function editP (i) {
    let lastProduct = prompt('Nhập thay đổi: ');
    productList[i] = lastProduct;
    alert('Edit Success')
    displayP();
}

function deleteP (i) {
    productList.splice(i, 1);
    alert('Delete Success')
    displayP();
}