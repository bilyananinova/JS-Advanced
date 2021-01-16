function spiralMatrix(width, height) {

    let matrix = [];

    for (let row = 0; row < width; row++) {
        matrix[row] = [];
        for (let col = 0; col < height; col++) {
            matrix[row][col] = 0;
        }
    }

    let top = 0;
    let bottom = height - 1;
    let left = 0;
    let right = width - 1;
    let num = 1;

    while (top <= bottom && left <= right) {
        //Top
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++
        }
        top++;

        //Right
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++
        }
        right--;

        //Bottom
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num;
            num++
        }
        bottom--;

        //Left
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num;
            num++
        }
        left++

    }

    matrix.forEach(r => {
        console.log(r.join(' '));
    })
}

spiralMatrix(5, 5);
console.log('------');
spiralMatrix(3, 3);
