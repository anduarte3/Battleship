import {Ship} from "./ship";

let Aircraft = Ship(5);
let Battleship = Ship(4);
let Cruiser = Ship(3);
let Submarine = Ship(2);
let Destroyer = Ship(1);

function Gameboard() {
    let gameShips = [Destroyer, Submarine, Cruiser, Battleship, Aircraft];
    let coords = [];
    let missShot = [];
    const boardSize = 10;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
        board.push(new Array(boardSize).fill(null));
    } 
    function placeShip(x, y, length, orientation) {
        
        if (board[x][y] == null) {
            if (orientation == 'horizontal') {
                for (let i = 0; i < length; i++) {
                    gameShips[length-1].ships.positions.push([x,y+i]);
                    coords.push([x,y+i])
                    board[x][y+i] = gameShips[length-1].ships.hehe;
                }
            }
            else if (orientation == 'vertical') {
                for (let j = 0; j < length; j++) {
                    gameShips[length-1].ships.positions.push([x,y+j]);
                    board[x+j][y] = gameShips[length-1].ships.hehe;
                }
            }
        }
        else if (board[x][y] !== null) {
            console.log('Error');
        }
        return {board, coords}
    }
    function receiveHit(x, y) {
        const hasCoords = (arr,x,y) => {
            arr.some(coords => coords.length === 2 && coords[0] === x && coords[1] === y);
        }
        const isTrue = hasCoords(coords,x,y);

        if (isTrue === true) { board[x][y] = 'X'; }
        else { missShot.push([x,y]); board[x][y] = 'Fail'; }

        return {board, isTrue, missShot}
    }  

    function GameOver() {
        for (let i = 0; i<gameShips.length-1; i++) {
            if (gameShips[i].ships.sunk === true) {
                console.log('Game is Over all enemy ships are sunk');
            }
        }
    }
    return {board, placeShip, receiveHit, GameOver}
}

let test = Gameboard();
console.log(test);
console.log(test.placeShip(2,3,4, 'horizontal'));
console.log(test.placeShip(7,8,3, 'horizontal'));
console.log(test.placeShip(4,2,2, 'vertical'));
console.log(test.receiveHit(1,1)); // Miss 
console.log(test.receiveHit(2,3)); // Hit

export default Gameboard;


//Board created
//Board can place ships
//Board can register miss fail and hits

// Todo
// Register hit to ship hit
// Como guardar as coordenadas do ship e depois registar o sitio correto do ship
// Guardar navios no array dentro do placehsip function