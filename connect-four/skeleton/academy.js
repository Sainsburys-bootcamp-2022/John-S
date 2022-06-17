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
let rowIndex;



// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
// function takeTurn(row, column) {

//     let counterDrop = 5
//     {
//         board([5][`${column}`])
//     }

//     // drop to lowest position (highest index) that is not null

//     let row =




    
     function takeTurn(row, column) {
        
     //function dropCounter () { // no need to have it as a function - would need to be called from elsewhere
        for (rowIndex = 5; rowIndex >= 0; rowIndex--) { // decrements row index from 5-0. Doesn't currently stop
             if (board[rowIndex][column] ==null){           // which means that we keep looking at the nulls upwards
                board[rowIndex][column] = currentTurn        // and entering a counter in each space in the column
                currentTurn=="red" ? currentTurn="yellow" : currentTurn="red";  
                console.log(rowIndex)
                break                                        // couldn't really have been more obvious, could it?
                }    
            }
    
         //}

    
    
        
    
            rowPlayed = (board[`${rowIndex}`]) 
            // Pretty sure that .map would be cleaner than this, but I don't understand it in this context
             columnPlayed = board.map(sausages => sausages[`${column}`]) // accesses the index of each column

// lets get a diagonal out of this
// iterate back and forth while values are not null
// generate an intermediate variable as an array
// check those values


//let mapValue = board.map ((i) => i[0])
            // columnPlayed =  ([board[0][`${column}`],
            //                     board[1][`${column}`],
            //                     board[2][`${column}`],
            //                     board[3][`${column}`],
            //                     board[4][`${column}`],
            //                     board[5][`${column}`]])

           // Need something that'll do diagonals
    
            // where did I see that code for diagonals?
            
            // Nicked and not doing what I want - because I don't understand how to use map in this context
           // const transposeBoard = (board) => {
             //   return board.map((row,column) => board.map((row) => row[column]))
                //return board.map((_,index) => board.map((row) => row[index]))     // original
           // }
            
        
        console.log(board)
        console.log(currentTurn)
        console.log("takeTurn was called with row: " + row + ", column:" + column);
        console.log(`takeTurn was called with row: ${row}, column: ${column}`);
        console.log("rowPlayed is " + rowPlayed)
        console.log("rowIndex is " + rowIndex)
        console.log(columnPlayed)
       // console.log(transposeBoard)
    }
// function takeTurn(row, column) {
     
    
//     board[row][column] = currentTurn
//         currentTurn=="red" ? currentTurn="yellow" : currentTurn="red";

//         let rowPlayed = (`${row}`)
//         let columnPlayed =  ([board[0][`${column}`],
//                             board[1][`${column}`],
//                             board[2][`${column}`],
//                             board[3][`${column}`],
//                             board[4][`${column}`],
//                             board[5][`${column}`]])

//         // where did I see that code for diagonals?

//         const transposeBoard = (board) => {
//             return board.map((_,index) => board.map((row) => row[index]))
//         }
        
    
//     console.log(board)
//     console.log(currentTurn)
//     console.log("takeTurn was called with row: " + row + ", column:" + column);
//     console.log(`takeTurn was called with row: ${row}, column: ${column}`);
//     console.log(rowPlayed)
//     console.log(columnPlayed)
//     console.log(transposeBoard)
// }

// Where did I pinch this from and what does it do?
// const newBoard = (n) => {
//     return [...board(n).map((row) => board(n).fill)]

// }
// console.log(newBoard)




// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    
    // Ternary function to reverse currentTurn and allow us to get the winner right
   let winner = (currentTurn == "yellow") ? "red" : "yellow";
   console.log(winner)


    // not keen on this line - else ifs are functional and I can extend them without trouble
    // but it's got to be neater doing them with what, for loops? I can probably get my head round that
    // obviously I'm just returning currentTurn at the moment, which has been set to the next one ...

    // map the array? COmpare each element to red/yellow? Or compare to the first one?

    // horizontal
    // if ((rowPlayed[0]==rowPlayed[1]==rowPlayed[2]==rowPlayed[3]&&rowPlayed[3]!=null)) return winner;
    if (rowPlayed[0]==rowPlayed[1]&&rowPlayed[1]==rowPlayed[2]&&rowPlayed[2]==rowPlayed[3]&&rowPlayed[3]!=null) return winner;
    else if (rowPlayed[1]==rowPlayed[2]&&rowPlayed[2]==rowPlayed[3]&&rowPlayed[3]==rowPlayed[4]&&rowPlayed[3]!=null) return winner;
    else if (rowPlayed[2]==rowPlayed[3]&&rowPlayed[3]==rowPlayed[4]&&rowPlayed[4]==rowPlayed[5]&&rowPlayed[3]!=null) return winner;
    else if (rowPlayed[3]==rowPlayed[4]&&rowPlayed[4]==rowPlayed[5]&&rowPlayed[5]==rowPlayed[6]&&rowPlayed[3]!=null) return winner;

    //vertical
    if (columnPlayed[0]==columnPlayed[1]&&columnPlayed[1]==columnPlayed[2]&&columnPlayed[2]==columnPlayed[3]&&columnPlayed[3]!=null) return winner;
    else if (columnPlayed[1]==columnPlayed[2]&&columnPlayed[2]==columnPlayed[3]&&columnPlayed[3]==columnPlayed[4]&&columnPlayed[3]!=null) return winner;
    else if (columnPlayed[2]==columnPlayed[3]&&columnPlayed[3]==columnPlayed[4]&&columnPlayed[4]==columnPlayed[5]&&columnPlayed[3]!=null) return winner;
    else if (columnPlayed[3]==columnPlayed[4]&&columnPlayed[4]==columnPlayed[5]&&columnPlayed[5]==columnPlayed[6]&&columnPlayed[3]!=null) return winner;
    else if (columnPlayed[4]==columnPlayed[5]&&columnPlayed[5]==columnPlayed[6]&&columnPlayed[6]==columnPlayed[7]&&columnPlayed[3]!=null) return winner;
        

    // Nicked code
    // for (let i = 0; i < rowPlayed.length; i++) {                // stepping through the array - doing the full length.
    //                                                             // next step is 0-3, 1-4, 2-5, 3-6 
    //     for (let k = i + 1; k < rowPlayed.length; k++) {        // and incrementing again
    //         if (rowPlayed[i] == rowPlayed[k] && rowPlayed[i] !=null) {                 // checking each element against the next         
    //             return currentTurn
    //         }
    //         //return currentTurn
    //     }
    // }

        
       // 


    // if (board[0][0]==board[0][1]&&board[0][0]==board[0][2]&&board[0][0]!=null) return board[0][0];
    // else if (board[1][0]==board[1][1]&&board[1][0]==board[1][2]) return board[1][0];
    // else if (board[2][0]==board[2][1]&&board[2][0]==board[2][2]) return board[2][0];
    
    // // vertical winners
    // // same sort of problem with column 2
    // else if (board[0][0]==board[1][0]&&board[0][0]==board[2][0]) return board[0][0];
    // else if (board[0][1]==board[1][1]&&board[0][1]==board[2][1]) return board[0][1];
    // else if (board[0][2]==board[1][2]&&board[0][2]==board[2][2]) return board[0][2];

    // // diagonal winners
    // else if (board[0][0]==board[1][1]&&board[0][0]==board[2][2]) return board[0][0];
    // else if (board[0][2]==board[1][1]&&board[0][2]==board[2][0]) return board[0][2];

    // // draw
    // else if (board[0][0]&&board[0][1]&&board[0][2]!=null&&
    //         board[1][0]&&board[1][1]&&board[1][2]!=null&&
    //         board[2][0]&&board[2][1]&&board[2][2]!=null) return "nobody";

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
