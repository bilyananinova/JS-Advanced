function diagonalAttack(input) {
    let matrix = [];
    let mainDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ');

        matrix.push(line)
    }

    //mainDiagonal
    for (let row = 0; row < matrix.length; row++) {
        let n = matrix[row][row];
        mainDiagonal += Number(n);
    }

    //secondDiagonal
    for (let row = 0; row < matrix.length; row++) {
        let index = matrix.length - row - 1
        let n = matrix[row][index];
        secondDiagonal += Number(n);
    }

    if (mainDiagonal == secondDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {

                if (row != col && col != matrix.length - row - 1) {
                    matrix[row][col] = mainDiagonal;
                }
            }
        }
    }

    matrix.forEach(element => {
        console.log(element.join(' '));
    });
}

diagonalAttack(
    [
        '5 3 12 3 1',       //'  5   3   12    3    1',
        '11 4 23 2 5',      //' 11   4   23    2    5',
        '101 12 3 21 10',   //'101  12    3   21   10',
        '1 4 5 2 2',        //'  1   4    5    2    2', 
        '5 22 33 11 1'      //'  5  22   33   11    1' 
    ]
);

console.log('----');

diagonalAttack(
    [
        '1 1 1',
        '1 1 1',
        '1 1 0'
    ]
)

console.log('----');
