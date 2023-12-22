
let a = parseInt(prompt('Mời nhập nhiệt độ:'))
    for (let i = 20; i>a; i) {
        a = prompt('Hãy tăng nhiệt độ:');
    }
    for (let i = 100; i<a; i) {
        a = prompt('Hãy giảm nhiệt độ:');
    }
alert('Nhiệt độ phù hợp')