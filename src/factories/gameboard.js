import {Player} from "./player";
import {Ship} from "./ship";

function Gameboard() {
    let gameShips = [Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)];
    let coords = [];
    let missShot = [];
    const boardSize = 10;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
        board.push(new Array(boardSize).fill(null));
    } 

    function placeShip(x, y, length, orientation) {

        if (board[x][y] == null && orientation == 'horizontal') {
            for (let i = 0; i < length; i++) {
                coords.push([x,y+i])
                gameShips[length-1].ships.positions.push([x,y+i]);
                board[x][y+i] = 'O';
            }
        }
        else if (board[x][y] == null && orientation == 'vertical') {
            for (let j = 0; j < length; j++) {
                coords.push([x,y+j])
                gameShips[length-1].ships.positions.push([x,y+j]);
                board[x+j][y] = 'O';
            }
        }
            else if (board[x][y] !== null) { console.log('Error'); } 

        return {board, gameShips, length}
    }
    function receiveHit(x, y) {
        for (let ship of gameShips) {
            if (ship.ships.positions) {

            }
          
            console.log(ship.ships.positions);
        }
       
        const GameOver = () => {
            // for (let i = 0; i < gameShips.length; i++) {
            //     if (gameShips[i].ships.hits === gameShips[i].ships.length) {
            //         gameShips[i].isSunk();
            //         //console.log('The Ship is sunk');
            //     }
            // }
        }
        return {GameOver}
    }
    console.log(missShot);
    return {board, placeShip, receiveHit}
}

let test = Gameboard();
console.log(test);
console.log(test.placeShip(2,3,4, 'horizontal'));
console.log(test.placeShip(7,8,3, 'horizontal'));
console.log(test.placeShip(4,2,2, 'vertical'));
console.log(test.receiveHit(1,1)); // Miss 
console.log(test.receiveHit(2,3)); // Hit
// console.log(test.receiveHit(2,3));
// console.log(test.receiveHit(4,2));
// console.log(test.receiveHit(2,4));

export default Gameboard;


// // const isHit = () => {
//         //     // const isTrue = hasCoords(coords,x,y);
//         //     // if (isTrue === true) { board[x][y] = 'X'; }
//         //     // else if (isTrue === false) { missShot.push([x,y]); board[x][y] = 'Fail'; }
            
//         //}
//         
//         const hasCoords = (coords,x,y) => {
//             coords.some(coords => coords.length === 2 && coords[0] === x && coords[1] === y);
//         }
//         const hasShipHit = (array,x,y) => {
            
//             // for (let ship of array) {
//             //     let fun = ship.ships.positions;
//             //     let result = fun.some(fun => fun.length === 2 && fun[0] === x && fun[1] === y) ;
//             //     console.log(result);
//             // }
//             // return result
//         }
//         console.log(hasShipHit(gameShips,x,y))    