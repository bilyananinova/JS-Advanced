function equalNeighbors(input) {

    let equalCount = 0;

    for (let row = 0; row < input.length; row++) {
        for(let col = 0; col < input[row].length; col++) {
            // let cur = input[row][col]
            // let next = input[row][col + 1]
            // let bellow = input[row + 1][col]

            if(input[col + 1] &&  input[row][col] == input[row][col + 1]) {
                equalCount++;
            }

            if( input[row + 1] && input[row][col] == input[row + 1][col]) {
                equalCount++;
            }
        }
    }

    console.log(equalCount);
}

equalNeighbors(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
);

console.log('-------');

equalNeighbors(
    [
        ['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']
    ]
);
