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
    
    console.log(board)
    console.log(currentTurn)
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
}

const newBoard = (n) => {
    return [...board(n).map((row) => board(n).fill)]

}




// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");

    // loads of if statements?
    // IF all positions match and are not null
    // THEN call display winner
    // use whoever had the last turn
    // console.log(board.toString())
    //  let stringBoard = (board.toString())
    // console.log(stringBoard)
    // This only works for an exact match on that string, so bollocks to it
    // if (stringBoard=="cross,cross,cross,nought,nought,nought,,,") return "cross";
    // ** Can you work with a partial match on the string? I thought that the equality 
    // operator was loose enough to get away with "cross,cross,cross" and a load of commas
    //  if (stringBoard=="cross,cross,cross*") return "cross"; // doesn't work either


    // changed the strings expected by checkWinner to match the strings used in currentTurn
    // horizontal winners
    // funny one here - if you win in row 2 but have filled 1,0 and 1,2 it won't 
    // return a winner until an entry in row 0, and if row 1 is filled it'll declare  
    // that as the winner - OK, that's down to not handling the null case
    if (board[0][0]==board[0][1]&&board[0][0]==board[0][2]&&board[0][0]!=null) return board[0][0];
    else if (board[1][0]==board[1][1]&&board[1][0]==board[1][2]) return board[1][0];
    else if (board[2][0]==board[2][1]&&board[2][0]==board[2][2]) return board[2][0];
    
    // vertical winners
    // same sort of problem with column 2
    else if (board[0][0]==board[1][0]&&board[0][0]==board[2][0]) return board[0][0];
    else if (board[0][1]==board[1][1]&&board[0][1]==board[2][1]) return board[0][1];
    else if (board[0][2]==board[1][2]&&board[0][2]==board[2][2]) return board[0][2];

    // diagonal winners
    else if (board[0][0]==board[1][1]&&board[0][0]==board[2][2]) return board[0][0];
    else if (board[0][2]==board[1][1]&&board[0][2]==board[2][0]) return board[0][2];

    // draw
    else if (board[0][0]&&board[0][1]&&board[0][2]!=null&&
            board[1][0]&&board[1][1]&&board[1][2]!=null&&
            board[2][0]&&board[2][1]&&board[2][2]!=null) return "nobody";

    // console.log(board[0][0]);
    

    // 
    // either give each position a number and check against the winning combinations
    // row
    // 0,1,2
    // 3,4,5
    // 6,7,8
    // column
    // 0,3,6
    // 1,4,7
    // 2,5,8
    // diagonal
    // 0,4,8
    // 2,4,6
    
    // or against the array positions
    // row
    // [0,0],[0,1],[0,2]
    // [1,0],[1,1],[1,2]
    // [2,0],[2,1],[2,2]
    // column
    // [0,0],[1,0],[2,0]
    // [0,1],[1,1],[2,1]
    // [0,2],[1,2],[2,2]
    // diagonal
    // [0,0],[1,1],[2,2]
    // [0,2],[1,1],[2,0]
    

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
