let numbers = [2,6,8,10,14,9,61,63,65,67,69,71,73,75, -77];

let min = getMin(numbers);

function getMin(numbers){
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) min = numbers[i];
    }
    return min;
}

console.log(min);