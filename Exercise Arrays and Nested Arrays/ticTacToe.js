function ticTacToe(array) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let player = 'X';
    let isWin = false;
    let isNoWinsEnd = false;

    for (let move of array) {
        let [row, col] = move.split(' ').map(Number);

        // play(row, col, board);

        if (board[row][col] == false) {
            board[row][col] = player;
        } else {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }

        win(board);

        end(board);


        if (isNoWinsEnd) {
            console.log(`The game ended! Nobody wins :(`);
            break;
        } else if (isWin) {
            console.log(`Player ${player} wins!`);
            break;
        }

        player = player === 'X' ? 'O' : 'X';

    }

    // function play(row, col, board) {
    //     if (board[row][col] == false) {
    //         board[row][col] = player;
    //     } else {
    //         console.log(`This place is already taken. Please choose another!`);
    //     }
    // }

    function win(board) {
        //rows
        if (board[0][0] == player && board[0][1] == player && board[0][2] == player ||
            board[1][0] == player && board[1][1] == player && board[1][2] == player) {
            isWin = true;
        }
        //columns
        if (board[0][0] == player && board[1][0] == player && board[2][0] == player ||
            board[0][1] == player && board[1][1] == player && board[2][1] == player ||
            board[0][2] == player && board[1][2] == player && board[2][2]) {
            isWin = true;
        }

        //diagonals
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player ||
            board[0][2] == player && board[1][1] == player && board[2][0] == player) {
            isWin = true;
        }

        return board;
    }

    function end(board) {
        if (!board[0].includes(false) && !board[1].includes(false) && !board[2].includes(false)) {
            isNoWinsEnd = true;
        }

    }

    board.forEach(x => console.log(`${x.join('\t')}`))
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
console.log('-----');
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
console.log('-----');
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
