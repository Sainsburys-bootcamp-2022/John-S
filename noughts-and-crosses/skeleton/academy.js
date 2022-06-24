// Make your changes to store and update game state in this file


let board = [[null, null, null], 
            [null, null, null], 
            [null, null, null]]

let currentTurn = "nought"

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    board[row][column] = currentTurn
        currentTurn=="nought" ? currentTurn="cross" : currentTurn="nought";
}

const newBoard = (n) => {
    return [...board(n).map((row) => board(n).fill)]

}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");

    // changed the strings expected by checkWinner to match the strings used in currentTurn
    // horizontal winners
    if (board[0][0]==board[0][1]&&board[0][0]==board[0][2]&&board[0][0]!=null) return board[0][0];
    else if (board[1][0]==board[1][1]&&board[1][0]==board[1][2]&&board[1][0]!=null) return board[1][0];
    else if (board[2][0]==board[2][1]&&board[2][0]==board[2][2]&&board[2][0]!=null) return board[2][0];
    
    // vertical winners
    else if (board[0][0]==board[1][0]&&board[0][0]==board[2][0]&&board[0][0]!=null) return board[0][0];
    else if (board[0][1]==board[1][1]&&board[0][1]==board[2][1]&&board[0][1]!=null) return board[0][1];
    else if (board[0][2]==board[1][2]&&board[0][2]==board[2][2]&&board[0][2]!=null) return board[0][2];

    // diagonal winners
    else if (board[0][0]==board[1][1]&&board[0][0]==board[2][2]&&board[1][1]!=null) return board[0][0];
    else if (board[0][2]==board[1][1]&&board[0][2]==board[2][0]&&board[1][1]!=null) return board[0][2];

    // draw
    else if (board[0][0]&&board[0][1]&&board[0][2]!=null&&
            board[1][0]&&board[1][1]&&board[1][2]!=null&&
            board[2][0]&&board[2][1]&&board[2][2]!=null) return "nobody";

    


    return null;
}



// Set the game state back to its original state to play another game.
// resets the turn as crudely as the board
function resetGame() {
    board = [[null, null, null], 
            [null, null, null], 
            [null, null, null]];
    currentTurn = "nought"
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
// if there has been a move, call drawBoard, else

// call positionClick

// then call checkWinner


//

    return board;
}

// 










if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
