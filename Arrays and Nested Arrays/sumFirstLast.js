function sumFirstLast(input) {

    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);

    let sum = first + last;

    return sum;
}

sumFirstLast(['20', '30', '40']);
console.log('-----');
sumFirstLast(['5', '10']);