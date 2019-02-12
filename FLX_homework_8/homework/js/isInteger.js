function isInteger(x){
    let numCopy = parseFloat(x);
    return !isNaN(numCopy) && numCopy == numCopy.toFixed();
}
isInteger(5);
isInteger(5.1);