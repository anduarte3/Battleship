import './style.css';
import {Ship} from '../src/factories/ship';
import {Gameboard} from '../src/factories/gameboard';
import {Player} from '../src/factories/player';

const startGameButton = document.getElementById('start-game');
const clearGameButton = document.getElementById('clear-game');
const toggleButton = document.getElementById('toggle-button');
const eventButton = document.getElementById('event-button');

let gameBoard = Gameboard();
let isVertical = false;

function initialize() {
  startGameButton.addEventListener('click', () => {
    gameBoard.createBoards();
    startGameButton.disabled = true;
    toggleButton.disabled = false;
    eventButton.textContent = 'Place your Ships!';
  });
  clearGameButton.addEventListener('click', () => {
    gameBoard.removeBoards();
    startGameButton.disabled = false;
    toggleButton.disabled = true;
    eventButton.textContent = '';
  });
  toggleButton.addEventListener('click', () =>  {
    isVertical = !isVertical;
    if (isVertical) {
      toggleButton.textContent = "On";
      toggleButton.classList.add('on');
      toggleButton.classList.remove('off');
      // Do something when toggleButton is turned on
    } else {
      toggleButton.textContent = "Off";
      toggleButton.classList.remove('on');
      toggleButton.classList.add('off');
      // Do something when toggleButton is turned off
    }
  })
  
}
initialize()

function shipLengths() {
  let shipLength = 1;
  for (let i = 0; i < 5; i++) {
    placeShip(row, col, length, isVertical)
  }
  
}

    

//Click new game
//Clear all the game and place new boards
//It's time to place ships, left side is player board, if vertical button is on ships placement is vertical
//Place player ships as input from the player, from 1 to 5,
//it should place until there are the 5 different ships
//Then placeRandom for the computer