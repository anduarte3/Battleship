import {Ship} from "./ship";

function Gameboard() {

    const ships = [];
    const shipsComp = [];
    const missShot = [];
    const boardSize = 10;
    // const board = [];
    // const boardComp = [];
    
    function placeShip(row, column, length, isVertical, board) {
        const newShip = Ship(length);
        
        if (!isPlacement(row, column, length, isVertical, board)) return false
            console.log('This means placement is true');
            if (isVertical === true) {
                for (let i = 0; i < length; i++) {
                    //Player Board
                    board[row+i][column].shipId = newShip.shipId;
                    newShip.positions.push([row+i, column]);
                }
            } else if (isVertical === false) {
                for (let j = 0; j < length; j++) {
                    //Player Board
                    board[row][column+j].shipId = newShip.shipId;
                    newShip.positions.push([row, column+j]); 
                }
            }
            ships.push(newShip)

        return { board, ships }
    }
    
    function placeRandom(shipPlaced, boardComp) {
        //let shipPlaced = 1;
        let row = Math.floor(Math.random() * 10);
        let column = Math.floor(Math.random() * 10);

        const randomAlign = Math.floor(Math.random() * 2) > 0 ? true : false;
        const newCompShip = Ship(shipPlaced);
     
        if (isPlacement(row, column, shipPlaced, randomAlign, boardComp)) {
            console.log('This means placement is true');
            if (randomAlign) {
                for (let i = 0; i < shipPlaced; i++) {
                    //Comp Board
                    boardComp[row+i][column].shipId = newCompShip.shipId;
                    newCompShip.positions.push([row+i, column]);
                }
            } else if (!randomAlign) {
                for (let j = 0; j < shipPlaced; j++) {
                    //Comp Board
                    boardComp[row][column+j].shipId = newCompShip.shipId;
                    newCompShip.positions.push([row, column+j]);
                }
            }
            shipsComp.push(newCompShip)
        }
        else return false
        console.log(boardComp);
        return { boardComp, shipsComp }
    }
    function isPlacement(row, column, length, isVertical, board) {
        // case position is out of gameboard
        if (row < 0 || row > boardSize - 1 || column < 0 || column > boardSize - 1) return false 

        //case ship doesn't fit in gameboard
        if (isVertical == true) {
            if (row + length > boardSize - 1) return false
        } else {
            if (column + length > boardSize - 1) return false
        }

        // case any of the fields is already taken
        if (isVertical) {
            for (let i = 0; i < length; i++) {
                if (board[row+i][column].shipId !== null) return false
            }
        } else {
            for (let i = 0; i < length; i++) {
                if (board[row][column+i].shipId !== null) return false
            }
        } 

        // case any of the near fields are taken
        if (!isVertical) {
            for (let i = 0; i < length; i++) {
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (row + x + i < 0 || 
                            row + x + i >= boardSize - 1 ||
                            column + y < 0 ||
                            column + y >= boardSize - 1) continue

                        if (board[row + x + i][column + y].shipId !== null) return false
                    }
                }          
            }
        }  else {
            for (let i = 0; i < length; i++) {
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (row + x < 0 || 
                            row + x >= boardSize - 1 ||
                            column + y + i < 0 ||
                            column + y + i >= boardSize - 1) continue

                        if(board[row + x][column + y + i].shipId !== null) return false
                    }
                }          
            }
        }
        return true
    }
    function receiveAttack(row, column, board) {
        const target = board[row][column];
        const targetShipId = target.shipId;

        console.log(ships);
        console.log(shipsComp);
        //If outside the board
        if (row < 0 || row > boardSize || column < 0 || column > boardSize) return false 

        //If is a miss
        if (targetShipId == null && target.hit == false) {
            target.hit = true;
            //Register as a miss
            missShot.push([row, column]);
            return missShot
        }
        //Already Hit field or Ship already Hit is basically the same
        if (target.hit) {
            console.log('Error already hit spot');
            //User or AI need to input another field because this is invalid
            return false
        }
        //Ship has been hit
        if (targetShipId !== null && target.hit == false) {
            for (let i = 0; i < ships.length; i++) {
                if (ships[i].shipId === target.shipId) {
                    //Update hit on board
                    target.hit = true;
                    //Update hit on the proper ship
                    ships[i].hit();

                    if (ships[i].getHits() === ships[i].length) {
                        ships[i].isSunk();
                    }
                    //Check if all ships sunk
                    if (ships[i].isSunk() == true) {
                        //Game Over
                        return 'GameOver'
                    }
                }
            }
        }
        console.log(missShot);
        console.log(board);
        console.log(ships);
        return { board, missShot, ships }
    }
    function isEmpty() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (board[i][j].shipId !== null) return false
            }
        }
        return true
    }
    function isGameOver() {
    }

    return {
        ships,
        shipsComp,
        placeShip, 
        placeRandom,
        isPlacement,
        receiveAttack,
        isEmpty
    }
}

export {Gameboard};