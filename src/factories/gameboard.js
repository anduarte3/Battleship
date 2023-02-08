import {Ship} from "./ship";

function Gameboard() {
    let gameShips = [Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)];
    let missShot = [];
    const boardSize = 10;
    const board = [];
    
    for (let i = 0; i < boardSize; i++) {
        board.push(new Array(boardSize).fill(null));
    }
    //placeShip -> Check isPlacement
    //placeRandom -> placeShip -> Check isPlacement
    function placeShip(posX, posY, length, isVertical) {
        
        if (isPlacement(posX, posY, length, isVertical) === true && isEmpty() === true) {
            if (isVertical === true) {
                for (let i = 0; i < length; i++) {
                    board[posX+i][posY] = 'O';
                }
            } else if (isVertical === false) {
                for (let j = 0; j < length; j++) {
                    board[posX][posY+j] = 'H';
                }
            }
        }
        return board
    }
    function placeRandom() {
        let shipPlaced = 1;
        let ShipEnemy;

        while (shipPlaced < 6) {
            let posX = Math.floor(Math.random() * 10);
            let posY = Math.floor(Math.random() * 10);
            let randomAlign = Math.floor(Math.random() * 2);
            randomAlign > 0 ? randomAlign = true : randomAlign = false;
            
            placeShip(posX, posY, shipPlaced, randomAlign);
            ShipEnemy = Ship(shipPlaced);
            shipPlaced++;
        }
        return ShipEnemy
    }
    function isPlacement(posX, posY, length, isVertical) {
        let maxRow = board.length;
        let maxCol = board[0].length;
        let endX = posX;
        let endY = posY;

        if (isVertical === true) { endX = posX + length-1;} 
        else if (isVertical === false) { endY = posY + length-1;}

        // case position is out of gameboard
        if (endX >= maxRow || endY >= maxCol) {
            console.log('Error, out of bounds');
            return false
        }       
        // case any of the fields is already taken
        for (let i = 0; i < length; i++) {
            if (board[posX+i][posY]) { return false }
            else if (board[posX][posY+i]) { return false }
        }
        // case any of the near fields are taken
        if (isVertical === true) {
            //Iterate over Ship Size
            for (let i = 0; i < length; i++) {
                    //case left
                    if (board[posX-1][posY] !== null) {
                        //case right
                        if (board[posX+1][posY] !== null) {
                            return false
                        }
                    }
                    //case above and below
                    if (i === 0 && board[posX][posY-1] !== null) { return false } 
                    if (i === length-1 && board[posX][posY+1] !== null) { return false } 
                }
            return true
        }
        else if (isVertical === false) {
            //Iterate over Ship Size
            for (let i = 0; i < length; i++) {
                //case above
                if (board[posX][posY-1] !== null) {
                    //case below
                    if (board[posX][posY+1] !== null) {
                        return false
                    }
                }
                //case left and right
                if (i === 0 && board[posX-1][posY] !== null) { return false } 
                if (i === length-1 && board[posX+1][posY] !== null) { return false } 
            }
            return true
        }
        //Final return
        return true
    }
    function isEmpty() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (board[i][j] !== null) { return false}
                else { return true }
            }
        } 
    }
    function receiveAttack(posX, posY) {
        for (let ship of gameShips) {
            ship.ships.positions.forEach(function (item) {
                if (item.length === 2 && item[0] === posX && item[1] === posY) {
                    board[posX][posY] = 'X';
                }
                else  { missShot.push([posX,posY]); board[posX][posY] = 'Fail'; }
            })
        }
        isGameOver();
        return {board}
    }
    function isGameOver() {
        for (let ship of gameShips) {
            if (ship[i].ships.hits === ship[i].ships.length) {
                ship[i].isSunk();
            }
        }
        return 'GameOver'
    }
    return {board, gameShips, placeShip, placeRandom, receiveAttack}
}

let game = Gameboard();

console.log(game.placeShip(2,4,4,false));
console.log(game.placeShip(6,2,5,true));
console.log(game.placeShip(6,8,3,true));

console.log(game.placeRandom(2,4,4,false));
console.log(game.placeRandom(6,2,5,true));
console.log(game.placeRandom(6,8,3,true));

export {Gameboard};