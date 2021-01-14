function processOddPositions(input) {
    let result = [];
    input.forEach((element, index) => {
        if (index % 2 == 1) {
            result.push(element)
        }
    });

    result = result.map(x => x * 2).reverse()
    console.log(result);
}

processOddPositions([10, 15, 20, 25]);
console.log('---');
processOddPositions([3, 0, 10, 4, 7, 3]);
