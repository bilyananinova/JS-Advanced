function negativePositiveNumbers(input) {

    let array = [];

    for (const num of input) {
        if (num >= 0) {
            array.push(num);
        } else {
            array.unshift(num)
        }
    }

    array.forEach(x => console.log(x))
}

negativePositiveNumbers([7, -2, 8, 9]);
console.log('----');
negativePositiveNumbers([3, -2, 0, -1]);