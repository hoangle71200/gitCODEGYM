let value = parseInt(prompt("Enter a number: "));
let foundedV = [];
let count = 0;
let numbers = [-3, 5, 1, 3, 2, 10];

for (let i=0; i<numbers.length; i++) {
    if (value === numbers[i]) {
        foundedV.push(i);
        count++;
    }
}
if (count == 0) {
    alert('Not found')
} else if (count > 0) {
    alert(foundedV)
}