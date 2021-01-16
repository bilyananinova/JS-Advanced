function sortingNumbers(array) {
    array.sort((a, b) => a - b);

    let result = [];

    while (array.length != 0) {
        let smallest = array.shift();
        let biggest = array.pop();
        result.push(smallest);
        result.push(biggest);
    }

    return result
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
