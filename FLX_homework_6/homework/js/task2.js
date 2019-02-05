let output;

enterNum();

function enterNum() {
    const x = parseFloat(prompt('Please enter amount of money'));
    const discount = parseFloat(prompt('Please enter discount'));

    if (x >= 0 && x <= 9999999 && discount >= 0 && discount <= 99) {
        showPrice(x, discount);
    } else {
        output = 'Invalid input data';
        showOutput(output);
    }
}

function showPrice(x, discount) {
    let priceWithDiscount = x - x * discount / 100;
    let res = x - priceWithDiscount;

    output = 'Price without discount: ' + +x.toFixed(2) +
        '\nDiscount: ' + +discount.toFixed(2) +
        '% \nPrice with discount: ' + +priceWithDiscount.toFixed(2) +
        '\nRes: ' + +res.toFixed(2);

    showOutput(output);
}

function showOutput(output) {
    alert(output);
}