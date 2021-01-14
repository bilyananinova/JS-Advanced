function biggerHalf(input) {
    input = input.sort((a, b) => a - b);
    let start = input.length / 2;
    let result = input.slice(start);
    return result;
}

biggerHalf([4, 7, 2, 5]);
console.log('----');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
