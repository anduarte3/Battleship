import {Ship} from "./ship";

function Gameboard() {
    let gameShips = [Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)];
    let missShot = [];
    const boardSize = 10;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
        board.push(new Array(boardSize).fill(null));
    }

    function placeShip(x, y, length, orientation) {
    
        if (board[x][y] == null && orientation == 'horizontal') {
            for (let i = 0; i < length; i++) {
                gameShips[length-1].ships.positions.push([x,y+i]);
                board[x][y+i] = 'O';
            }
        }
        else if (board[x][y] == null && orientation == 'vertical') {
            for (let j = 0; j < length; j++) {
                gameShips[length-1].ships.positions.push([x,y+j]);
                board[x+j][y] = 'O';
            }
        }
            else if (board[x][y] !== null) { console.log('Error'); } 

        return {board, gameShips}
    }

    function receiveHit(x, y) {

        for (let ship of gameShips) {
            ship.ships.positions.forEach(function (item) {
                if (item.length === 2 && item[0] === x && item[1] === y) {
                    board[x][y] = 'X';
                }
                else  { missShot.push([x,y]); }
            })
        }
        const GameOver = () => {
            for (let ship of gameShips) {
                if (ship[i].ships.hits === ship[i].ships.length) {
                    ship[i].isSunk();
                }
            }
            return GameOver
        }
        return {board}
    }
    return {board, gameShips, placeShip, receiveHit}
}

export {Gameboard};