function magicMatrices(matrix) {
    let result = [];

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((acc, c) => acc + c, 0);
        result.push(sumRow)
    }

    for (let row = 0; row < matrix.length; row++) {
        let rows = [];
        for (let col = 0; col < matrix.length; col++) {
            let n = matrix[col][row];
            rows.push(n)
        }

        let sumCol = rows.reduce((acc, c) => acc + c, 0)
        result.push(sumCol)

    }

    console.log(result.every(x=> x == result[0]));
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
console.log('-----');
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
console.log('------');
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
