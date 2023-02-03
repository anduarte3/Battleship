import {Ship} from "./ship";

function Gameboard() {
    let gameShips = [Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)];
    let missShot = [];
    const boardSize = 10;
    const board = [];
    
    for (let i = 0; i < boardSize; i++) {
        board.push(new Array(boardSize).fill(null));
    }
    //PlaceShip tem de conseguir colocar navio tanto para player como computer
    function placeShip(posX, posY, length, isVertical) {
        if (isPlacement === true) {
            if (isVertical === true) {
                for (let i = 0; i < length; i++) {
                    board[posX+i][posY] = 'O';
                }
            } else if (isVertical === false){
                for (let j = 0; j < length; j++) {
                    board[posX][posY+j] = 'O';
                }
            }
            return board
        }
    }
    function isPlacement(posX, posY, length, isVertical) {
        let maxRow = board.length;
        let maxCol = board[0].length;
        let endX = posX;
        let endY = posY;

        if (isVertical === true) { endX = posX + length-1;} 
        else if (isVertical === false) { endY = posY + length-1;}

        if (endX >= maxRow || endY >= maxCol) {
            console.log('Error, out of bounds');
            return false
        }       
        return true 
    }
    function placeRandom() {
        let shipPlaced = 1;

        while (shipPlaced < 6) {
            let posX = Math.floor(Math.random() * 10);
            let posY = Math.floor(Math.random() * 10);
            let randomAlign = Math.floor(Math.random() * 2);
            randomAlign > 0 ? randomAlign = true : randomAlign = false;
           
            placeShip(posX, posY, shipPlaced, randomAlign)
            shipPlaced++;
        }
    }
    function receiveHit(posX, posY) {
        for (let ship of gameShips) {
            ship.ships.positions.forEach(function (item) {
                if (item.length === 2 && item[0] === posX && item[1] === posY) {
                    board[posX][posY] = 'X';
                }
                else  { missShot.push([posX,posY]); }
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

let game = Gameboard();

console.log(game.placeShip(2,4,4,false));
console.log(game.placeShip(6,2,5,true));
console.log(game.placeShip(6,8,3,true));

export {Gameboard};


// if (orientation == 'horizontal') {
//     for (let i = 0; i < length; i++) {
//         gameShips[length-1].ships.positions.push([x,y+i]);
//         board[x][y+i] = 'O';
//     }
// }
// else if (orientation == 'vertical') {
//     for (let j = 0; j < length; j++) {
//         gameShips[length-1].ships.positions.push([x,y+j]);
//         board[x+j][y] = 'O';
//     }
// }