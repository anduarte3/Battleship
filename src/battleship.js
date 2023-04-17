import './style.css';
import {Ship} from '../src/factories/ship';
import {Gameboard} from '../src/factories/gameboard';
import {Player} from '../src/factories/player';

const startGameButton = document.getElementById('start-game');
const clearGameButton = document.getElementById('clear-game');
const toggleButton = document.getElementById('toggle-button');
const eventButton = document.getElementById('event-button');

const board = [];
const boardComp = [];

let playerBoard = document.getElementById('player-board');
let computerBoard = document.getElementById('computer-board');

let gameBoard = Gameboard();
let isVertical = false;
let size = 10;
let shipLength = 1;
let playerSquares = [];
let computerSquares = [];
let playerTurn = true;

startGameButton.addEventListener('click', () => {
  createPlayerBoard();
  createCompBoard();
  placingCompShips();
  startGameButton.disabled = true;
  eventButton.textContent = 'Place your Ships!';
});

clearGameButton.addEventListener('click', () => {
  location.reload();
});

toggleButton.addEventListener('click', () =>  {
  
  if (isVertical === false) {
    toggleButton.textContent = "On";
    toggleButton.classList.add('on');
    toggleButton.classList.remove('off');
    isVertical = true;
  } else if (isVertical === true) {
    toggleButton.textContent = "Off";
    toggleButton.classList.remove('on');
    toggleButton.classList.add('off');
    isVertical = false;
  }
})

//Create boards for the logic
for (let i = 0; i < size; i++) {
  board.push(new Array(size).fill(null).map(() => ({ shipId: null, hit: false })));
}
for (let i = 0; i < size; i++) {
  boardComp.push(new Array(size).fill(null).map(() => ({ shipId: null, hit: false })));
}

//Create boards in HTML
function createPlayerBoard() {
  playerBoard = document.createElement('div');
  playerBoard.id = 'player-board';
  document.querySelector('#player-board-container').appendChild(playerBoard);

  // Add squares to the boards
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('button');
      square.classList.add('square');
      square.dataset.x = i;
      square.dataset.y = j;
      playerBoard.appendChild(square);
      square.addEventListener('click', playerBoardEvent);
    }
  }
  return { playerSquares, playerBoard }
}

function createCompBoard() {
  computerBoard = document.createElement('div');
  computerBoard.id = 'computer-board';
  document.querySelector('#computer-board-container').appendChild(computerBoard);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('button');
      square.classList.add('square');
      square.dataset.row = i;
      square.dataset.col = j;
      computerBoard.appendChild(square);
      square.addEventListener('click', compBoardEvent);
    }
  }
  return { computerSquares, computerBoard }
}

function playerBoardEvent(e) {
  const x = parseInt(e.target.dataset.x);
  const y = parseInt(e.target.dataset.y);
  console.log(`Coordinates are: x: ${x},y: ${y}`);
  //Placement is fully done
  if (placingPlayerShips(x,y) === 'Placement Done') {
    //Turn logic
    if (playerTurn === false) {
      startAttack().compAttack(x,y);
      playerTurn = true;
    }
  } else placingPlayerShips(x,y);
}

function compBoardEvent(e) {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);
  console.log(`Coordinates are: x: ${row},y: ${col}`);
  if (placingPlayerShips(row,col) === 'Placement Done') {
    if (playerTurn === true) {
      startAttack().playerAttack(row,col);
      playerTurn = false;
    }
  } else placingPlayerShips(row,col);
}

function placingPlayerShips(x, y) {
  let sucessfulPlacements = 0;
  
  if (shipLength >= 6) {
    eventButton.textContent = 'Game started!';
    return 'Placement Done'
  }

  if (gameBoard.placeShip(x, y, shipLength, isVertical, board)) {
    for (let i = 0; i < shipLength; i++) {
      if (isVertical == true) {
        const markShip = document.querySelector(`button[data-x="${x+i}"][data-y="${y}"]`);
        markShip.classList.add('blue');
      } else {
        const markShip = document.querySelector(`button[data-x="${x}"][data-y="${y+i}"]`);
        markShip.classList.add('blue');
      }
    }
    sucessfulPlacements++;
    shipLength++;
    
  } else {
    console.log('Invalid ship placement');
  }
  console.log(`Sucessfully placed ${sucessfulPlacements} ships.`);
  //console.log(`This is player board:`);
  console.log(board);
}

function placingCompShips() {
  let shipPlaced = 1;
  let sucessfulPlacements = 0;
  //Place Comp Ships Randomly
  for (let i = 0; i < 5; i++) {
    let placed = false;
    while (!placed) {
      placed = gameBoard.placeRandom(shipPlaced, boardComp);
    }
    shipPlaced++;
    sucessfulPlacements++;
  }
  console.log(`Sucessfully placed ${sucessfulPlacements} ships.`);
  //console.log(`This is comp board:`);
  console.log(boardComp);
}

function startAttack() {
  let gameover;
  
  //Register hits on Computer board
  function playerAttack(x,y) {
    const attack = document.querySelector(`button[data-row="${x}"][data-col="${y}"]`);
    attack.classList.add('red');

    gameBoard.receiveAttack(x,y,boardComp);
  }
  //Register hits on Player board
  function compAttack(x,y) {
    const attack = document.querySelector(`button[data-x="${x}"][data-y="${y}"]`);
    attack.classList.add('red');
    eventButton.textContent = 'Your turn';

    //gameBoard.receiveAttack(x,y);
  }

  return { playerAttack, compAttack }
}







// function removeBoards() {
//   if (playerBoard) {
//     playerBoard.remove();
//     playerBoard = null;
//   }
//   if (computerBoard) {
//     computerBoard.remove();
//     computerBoard = null;
//   }
//   playerSquares.forEach(square => square.remove());
//   computerSquares.forEach(square => square.remove());
//   playerSquares = [];
//   computerSquares = [];
// }