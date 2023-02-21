import {Ship} from "./ship";

let playerBoard = document.getElementById('player-board');
let computerBoard = document.getElementById('computer-board');


function Gameboard() {
    
    const ships = []
    const missShot = [];
    const boardSize = 10;
    const board = [];
    let playerSquares = [];
    let computerSquares = [];
    
    //Initialize
    for (let i = 0; i < boardSize; i++) {
        board.push(new Array(boardSize).fill(null).map(() => ({ shipId: null, hit: false })));
    }
    //Create boards in HTML-
    function createBoards() {
        //Re-creating the boards divs
        playerBoard = document.createElement('div');
        playerBoard.id = 'player-board';
        document.querySelector('#player-board-container').appendChild(playerBoard);

        computerBoard = document.createElement('div');
        computerBoard.id = 'computer-board';
        document.querySelector('#computer-board-container').appendChild(computerBoard);

        // Add squares to the boards
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const square = document.createElement('button');
                square.addEventListener('click', () => square.classList.add('red'));
                square.classList.add('square');
                playerBoard.appendChild(square);
                playerSquares.push();               
            }
        }
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const square = document.createElement('button');
                square.addEventListener('click', () => square.classList.add('red'));
                square.classList.add('square');
                computerBoard.appendChild(square);
                computerSquares.push();   
            }
        } 
        return { playerSquares, computerSquares, playerBoard, computerBoard}
    }
    function removeBoards() {
        if (playerBoard) {
            playerBoard.remove();
            playerBoard = null;
        }
        if (computerBoard) {
        computerBoard.remove();
        computerBoard = null;
        }
        playerSquares.forEach(square => square.remove());
        computerSquares.forEach(square => square.remove());
        playerSquares = [];
        computerSquares = [];
    }

    function placeShip(row, column, length, isVertical) {
        const newShip = Ship(length);

        if (!isPlacement(row, column, length, isVertical)) return false
            if (isVertical === true) {
                for (let i = 0; i < length; i++) {
                    board[row+i][column].shipId = newShip.shipId;
                    newShip.positions.push([row+i, column]);             
                }
            } else if (isVertical === false) {
                for (let j = 0; j < length; j++) {
                    board[row][column+j].shipId = newShip.shipId;
                    newShip.positions.push([row, column+j]); 
                }
            }
            ships.push(newShip)

        return { board, ships }
    }
    
    function placeRandom() {
        let shipPlaced = 1;

        while (shipPlaced < 6) {
            let row = Math.floor(Math.random() * 10);
            let column = Math.floor(Math.random() * 10);
            let randomAlign = Math.floor(Math.random() * 2);
            randomAlign > 0 ? randomAlign = true : randomAlign = false;

            if (isPlacement(row, column, shipPlaced, randomAlign) == true) {
                placeShip(row, column, shipPlaced, randomAlign);
                shipPlaced++;
            }  
        } 
        return board
    }
    function isPlacement(row, column, length, isVertical) {

        // case position is out of gameboard
        if (row < 0 || row > boardSize - 1 || column < 0 || column > boardSize - 1) return false 

        // case ship doesn't fit in gameboard
        if (isVertical == true) {
            if (row + length > boardSize - 1) return false
        } else {
            if (column + length > boardSize - 1) return false
        }

        // case any of the fields is already taken
        if (isVertical == true) {
            for (let i = 0; i < length; i++) {
                if (board[row+i][column].shipId !== null) return false 
            }
        } else {
            for (let i = 0; i < length; i++) {
                if (board[row][column+i].shipId !== null) return false 
            }
        } 
        // case any of the near fields are taken
        if (isVertical == true) {
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

    function receiveAttack(row, column) {
        const target = board[row][column];
        const targetShipId = target.shipId;

        //If outside the board
        if (row < 0 || row > boardSize - 1 || column < 0 || column > boardSize - 1) return false 

        //If is a miss
        if (targetShipId == null && target.hit == false) {
            target.hit = true;
            //Register as a miss
            missShot.push([row, column]);
            return
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
        board,
        ships,
        placeShip, 
        placeRandom,
        receiveAttack,
        createBoards,
        removeBoards,
        isEmpty
    }
}

let game = Gameboard();
// console.log(game);
// console.log(game.placeShip(1,1,1,false));
// console.log(game.placeShip(2,2,2,true));
// console.log(game.placeShip(4,4,3,false));
// console.log(game.placeShip(2,5,4,true));
// console.log(game.placeShip(5,1,5,true));
//console.log(game.placeRandom());
// console.log(game.ships);
// console.log(game.receiveAttack(2,3));
// console.log(game.receiveAttack(2,4));
// console.log(game.receiveAttack(2,5));
// console.log(game.receiveAttack(2,6));
// console.log(game.receiveAttack(3,3));
// console.log(game.receiveAttack(4,7));
// console.log(game.receiveAttack(3,8));
// console.log(game.receiveAttack(6,5));
// console.log(game.receiveAttack(0,0));
// console.log(game.receiveAttack(8,8));
// console.log(game.receiveAttack(0,9));
// console.log(game.receiveAttack(9,0));
// console.log(game.receiveAttack(2,3));

export {Gameboard};


// If player placeShip is false make condition to repeat the placement TODO
// Rework receiveHit function DONE
// Start gameboard tests maybe
// Rework player.js
// Start making Interface

//How do i know which ship is marked into the gameboard?

//1 - I need some sort of object property that can back trace to the Ship placed
