import {Ship} from "./ship";

let Aircraft = Ship('Aircraft', 5).ships;
let Battleship = Ship('Battleship', 4).ships;
let Cruiser = Ship('Cruiser', 3).ships;
let Submarine = Ship('Submarine', 2).ships;
let Destroyer = Ship('Destroyer', 1).ships;
console.log(Aircraft);
console.log(Battleship);
console.log(Cruiser);
console.log(Submarine);
console.log(Destroyer);

function Gameboard() {

    const boardSize = 10;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
        board.push(new Array(boardSize).fill(null));
    } 

    function placeShip(x, y, length, orientation) {
        if (board[x][y] == null) {
            if (orientation == 'horizontal') {
                for (let i = 0; i < length; i++) {
                    board[x][y+i] = 'O';
                }
                console.log(board);
            }
            else if (orientation == 'vertical') {
                for (let j = 0; j < length; j++) {
                    board[x+j][y] = 'O';
                }
                console.log(board);
            }
        }
        else if (board[x][y] !== null) {
            console.log('Error');
        }
        return board
    }

    function receiveHit(x, y) {
        console.log(board);
        if(board[x][y] !== null) {
            console.log('That was a clean hit');
            board[x][y] = 'X';
        }
        else if (board[x][y] == null) {
            console.log('That was a miss');
            board[x][y] = 'Fail';
        }
    }  
   
    return {board, placeShip, receiveHit}
}

let test = Gameboard();
console.log(test);
console.log(test.placeShip(2,2,Battleship.length, 'horizontal'));
console.log(test.placeShip(4,2,Cruiser.length, 'vertical'));
console.log(test.receiveHit(1,1)); // Miss 
console.log(test.receiveHit(2,3)); // Hit

export default Gameboard;