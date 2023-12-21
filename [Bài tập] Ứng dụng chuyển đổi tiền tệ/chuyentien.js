

function convert () {
    let amount = parseInt(document.getElementById('amountID').value);
    let txtFrom = document.getElementById('fromID').value;
    let txtTo = document.getElementById('toID').value;
    let result;
    if (txtFrom === 'VND') {
        if (txtTo === 'USD') {
            result = amount / 23000 + '$';
        } else result = amount + 'đ';
    } else if (txtFrom === 'USD') {
        if (txtTo === 'VND') {
            result = amount * 23000 + 'đ';
            } else result = amount + '$';
    }
    document.getElementById('resultID').innerHTML = result;
}