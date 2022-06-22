// Make your changes to store and update game state in this file


let board = [[null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null]]
let currentTurn = "red"
let rowPlayed;
let columnPlayed;
let diagonalUpRight;
let diagonalUpLeft;
let declaredWinner = false;
    
     function takeTurn(row, column) {                  // row is the row initially clicked
     for (rowIndex = 5; rowIndex >= 0; rowIndex--) {   // rowIndex is where the counter lands
             if (board[rowIndex][column] ==null && declaredWinner === false){           
                board[rowIndex][column] = currentTurn        
                currentTurn=="red" ? currentTurn="yellow" : currentTurn="red";  
                break                                        
                }    
            }
        // creates array used to check winners by row
        rowPlayed = (board[`${rowIndex}`]) 
        // creates array used to check winners by column
        columnPlayed = board.map(sausages => sausages[`${column}`]) // everybody likes sausages, even vegan ones
        // creates array used to check winners by one diagonal (bottom left to top right)
        diagonalUpRight = []
        for (startRow = rowIndex, startCol = column; startRow <= 5 && startRow >= 0 && startCol <= 6 && startCol >= 0; startRow--, startCol++){
            diagonalUpRight.push(board[startRow][startCol]) 
        }
        for (startRow = rowIndex + 1, startCol = column - 1; startRow <= 5 && startRow >= 0 && startCol <= 6 && startCol >= 0; startRow++, startCol--){
            diagonalUpRight.unshift(board[startRow][startCol]) 
        }
        // and by the other one (top left to bottom right)
        diagonalUpLeft = []
        for (startRow = rowIndex, startCol = column; startRow <= 5 && startRow >= 0 && startCol <= 6 && startCol >= 0; startRow--, startCol--){
            diagonalUpLeft.push(board[startRow][startCol]) 
        }
        for (startRow = rowIndex + 1, startCol = column + 1; startRow <= 5 && startRow >= 0 && startCol <= 6 && startCol >= 0; startRow++, startCol++){
            diagonalUpLeft.unshift(board[startRow][startCol]) 
        }
    }

function checkWinner() {
    // Ternary function to reverse currentTurn and allow us to get the winner right
   let winner = (currentTurn == "yellow") ? "red" : "yellow";
    // checks the arrays established above
    // horizontal
    if (rowPlayed[0]==rowPlayed[1]&&rowPlayed[1]==rowPlayed[2]&&rowPlayed[2]==rowPlayed[3]&&rowPlayed[3]!=null) { 
        declaredWinner =  true 
        return winner}
    else if (rowPlayed[1]==rowPlayed[2]&&rowPlayed[2]==rowPlayed[3]&&rowPlayed[3]==rowPlayed[4]&&rowPlayed[3]!=null) { 
        declaredWinner =  true 
        return winner}
    else if (rowPlayed[2]==rowPlayed[3]&&rowPlayed[3]==rowPlayed[4]&&rowPlayed[4]==rowPlayed[5]&&rowPlayed[3]!=null) { 
        declaredWinner =  true 
        return winner}
    else if (rowPlayed[3]==rowPlayed[4]&&rowPlayed[4]==rowPlayed[5]&&rowPlayed[5]==rowPlayed[6]&&rowPlayed[3]!=null) { 
        declaredWinner =  true 
        return winner}
    //vertical
    if (columnPlayed[0]==columnPlayed[1]&&columnPlayed[1]==columnPlayed[2]&&columnPlayed[2]==columnPlayed[3]&&columnPlayed[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (columnPlayed[1]==columnPlayed[2]&&columnPlayed[2]==columnPlayed[3]&&columnPlayed[3]==columnPlayed[4]&&columnPlayed[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (columnPlayed[2]==columnPlayed[3]&&columnPlayed[3]==columnPlayed[4]&&columnPlayed[4]==columnPlayed[5]&&columnPlayed[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (columnPlayed[3]==columnPlayed[4]&&columnPlayed[4]==columnPlayed[5]&&columnPlayed[5]==columnPlayed[6]&&columnPlayed[3]!=null) {
        declaredWinner =  true 
        return winner}
    //diagonal bottom left to top right
    if (diagonalUpRight[0]==diagonalUpRight[1]&&diagonalUpRight[1]==diagonalUpRight[2]&&diagonalUpRight[2]==diagonalUpRight[3]&&diagonalUpRight[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (diagonalUpRight[1]==diagonalUpRight[2]&&diagonalUpRight[2]==diagonalUpRight[3]&&diagonalUpRight[3]==diagonalUpRight[4]&&diagonalUpRight[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (diagonalUpRight[2]==diagonalUpRight[3]&&diagonalUpRight[3]==diagonalUpRight[4]&&diagonalUpRight[4]==diagonalUpRight[5]&&diagonalUpRight[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (diagonalUpRight[3]==diagonalUpRight[4]&&diagonalUpRight[4]==diagonalUpRight[5]&&diagonalUpRight[5]==diagonalUpRight[6]&&diagonalUpRight[3]!=null) {
        declaredWinner =  true 
        return winner}
    //diagonal top left to bottom right
    if (diagonalUpLeft[0]==diagonalUpLeft[1]&&diagonalUpLeft[1]==diagonalUpLeft[2]&&diagonalUpLeft[2]==diagonalUpLeft[3]&&diagonalUpLeft[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (diagonalUpLeft[1]==diagonalUpLeft[2]&&diagonalUpLeft[2]==diagonalUpLeft[3]&&diagonalUpLeft[3]==diagonalUpLeft[4]&&diagonalUpLeft[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (diagonalUpLeft[2]==diagonalUpLeft[3]&&diagonalUpLeft[3]==diagonalUpLeft[4]&&diagonalUpLeft[4]==diagonalUpLeft[5]&&diagonalUpLeft[3]!=null) {
        declaredWinner =  true 
        return winner}
    else if (diagonalUpLeft[3]==diagonalUpLeft[4]&&diagonalUpLeft[4]==diagonalUpLeft[5]&&diagonalUpLeft[5]==diagonalUpLeft[6]&&diagonalUpLeft[3]!=null) {
        declaredWinner =  true 
        return winner}
    //draw condition
    if (board[0][0]!=null && board[0][1]!=null && board[0][2]!=null && board[0][3]!=null &&board[0][4]!=null==board[0][5]!=null&&board[0][6]!=null) { 
        declaredWinner =  true 
            console.log(declaredWinner)
        winner = "nobody"
            console.log(winner)
        return winner
    }
    return null;
}
// Set the game state back to its original state to play another game.
// resets the turn as crudely as the board
function resetGame() {
    board = [[null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null]]
    currentTurn = "red"
    console.log("resetGame was called");
}
function getBoard() {
    console.log("getBoard was called");
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
