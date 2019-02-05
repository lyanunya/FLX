let output;

enterNum();

function enterNum() {
    const a = parseInt(prompt('Please, enter value a'));
    const b = parseInt(prompt('Please, enter value b'));
    const c = parseInt(prompt('Please, enter value c'));

    if (a && b && c !== 'NaN') {
        findDiscriminantAndRoot(a, b, c);
    } else {
        output = 'Invalid input data';
        showOutput(output);
    }
}

function findDiscriminantAndRoot(a, b, c) {
    let discriminant = b*b - 4 * a * c;

    if (discriminant === 0) {
        let x = -b/(2 * a);
        output = 'x = ' + x;
    } else if (discriminant > 0) {
        let x1 = (-1 * b + Math.sqrt(discriminant))/(2 * a);
        let x2 = (-1 * b - Math.sqrt(discriminant))/(2 * a);
        output = 'x1 = ' + +x1.toFixed(2) + ' and x2 = ' + +x2.toFixed(2);
    } else {
        output = 'no solution';
    }
    showOutput(output);
}

function showOutput(output) {
    alert(output);
}