let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
for (i=1; i<numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max)