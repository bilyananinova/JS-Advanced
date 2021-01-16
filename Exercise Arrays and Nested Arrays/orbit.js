function orbit(input) {

    let [width, height, x, y] = input;
    let matrix = [];
    for (let i = 0; i < width; i++) {
        let rows = [];
        for (let i = 0; i < height; i++) {
            rows.push(0)
        }

        matrix.push(rows);

    }

    matrix[x][y] = 1;

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            if (matrix[row][col] == 0) {
                let a = Math.abs(row - x)
                let b = Math.abs(col - y)
                matrix[row][col] = Math.max(a, b) + 1
            }

        }
    }

    matrix.forEach(element => {
        console.log(element.join(' '));
    })
}

orbit([4, 4, 0, 0]);
console.log('-----');
orbit([5, 5, 2, 2]);
console.log('-----');
orbit([3, 3, 2, 2]);
