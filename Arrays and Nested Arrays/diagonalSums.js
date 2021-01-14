function diagonalSums(input) {

    let mainDiagonal = 0;
    let secondDialgonal = 0;
    for (let row = 0; row < input.length; row++) {
        mainDiagonal += input[row][row];
        secondDialgonal += input[row][input.length - row - 1]

    };

    console.log(`${mainDiagonal} ${secondDialgonal}`);
}

diagonalSums(
    [
        [20, 40],
        [10, 60]
    ]
)

console.log('--------');

diagonalSums(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
)