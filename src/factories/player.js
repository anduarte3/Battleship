import {Gameboard} from "./gameboard";

function Player() {
   let gameBoard = Gameboard();
   let player;
   let computer;
   let turn = null;
   
   function attack(Gameboard) {
      console.log('null');
   }
   function randomAttack() {
      let positionX = Math.floor(Math.random() * 10); // x coord
      let positionY = Math.floor(Math.random() * 10); // y coord
      return {positionX, positionY}
   }
   gameBoard.receiveHit(randomAttack().positionX,randomAttack().positionY);
   return {attack, randomAttack}
}

let test = Player();
console.log(test);

export {Player};
